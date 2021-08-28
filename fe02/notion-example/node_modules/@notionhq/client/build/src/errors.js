"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRequestError = exports.APIResponseError = exports.APIErrorCode = exports.HTTPResponseError = exports.RequestTimeoutError = void 0;
const helpers_1 = require("./helpers");
class RequestTimeoutError extends Error {
    constructor(message = "Request to Notion API has timed out") {
        super(message);
        this.code = "notionhq_client_request_timeout";
        this.name = "RequestTimeoutError";
    }
    static isRequestTimeoutError(error) {
        return (error instanceof Error &&
            error.name === "RequestTimeoutError" &&
            "code" in error &&
            error["code"] === RequestTimeoutError.prototype.code);
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
class HTTPResponseError extends Error {
    constructor(response, message) {
        super(message !== null && message !== void 0 ? message : `Request to Notion API failed with status: ${response.statusCode}`);
        this.code = "notionhq_client_response_error";
        this.name = "HTTPResponseError";
        this.status = response.statusCode;
        this.headers = response.headers;
        this.body = response.rawBody.toString();
    }
    static isHTTPResponseError(error) {
        return (error instanceof Error &&
            error.name === "HTTPResponseError" &&
            "code" in error &&
            error["code"] === HTTPResponseError.prototype.code);
    }
}
exports.HTTPResponseError = HTTPResponseError;
/**
 * Error codes for responses from the API.
 */
var APIErrorCode;
(function (APIErrorCode) {
    APIErrorCode["Unauthorized"] = "unauthorized";
    APIErrorCode["RestrictedResource"] = "restricted_resource";
    APIErrorCode["ObjectNotFound"] = "object_not_found";
    APIErrorCode["RateLimited"] = "rate_limited";
    APIErrorCode["InvalidJSON"] = "invalid_json";
    APIErrorCode["InvalidRequestURL"] = "invalid_request_url";
    APIErrorCode["InvalidRequest"] = "invalid_request";
    APIErrorCode["ValidationError"] = "validation_error";
    APIErrorCode["ConflictError"] = "conflict_error";
    APIErrorCode["InternalServerError"] = "internal_server_error";
    APIErrorCode["ServiceUnavailable"] = "service_unavailable";
})(APIErrorCode = exports.APIErrorCode || (exports.APIErrorCode = {}));
/**
 * A response from the API indicating a problem.
 *
 * Use the `code` property to handle various kinds of errors. All its possible values are in `APIErrorCode`.
 */
class APIResponseError extends HTTPResponseError {
    constructor(response, body) {
        super(response, body.message);
        this.name = "APIResponseError";
        this.code = body.code;
    }
    static isAPIResponseError(error) {
        return (error instanceof Error &&
            error.name === "APIResponseError" &&
            "code" in error &&
            isAPIErrorCode(error["code"]));
    }
}
exports.APIResponseError = APIResponseError;
function buildRequestError(error) {
    if (isGotTimeoutError(error)) {
        return new RequestTimeoutError();
    }
    if (isGotHTTPError(error)) {
        const apiErrorResponseBody = parseAPIErrorResponseBody(error.response.body);
        if (apiErrorResponseBody !== undefined) {
            return new APIResponseError(error.response, apiErrorResponseBody);
        }
        return new HTTPResponseError(error.response);
    }
    return;
}
exports.buildRequestError = buildRequestError;
function parseAPIErrorResponseBody(body) {
    if (typeof body !== "string") {
        return;
    }
    let parsed;
    try {
        parsed = JSON.parse(body);
    }
    catch (parseError) {
        return;
    }
    if (!helpers_1.isObject(parsed) ||
        typeof parsed["message"] !== "string" ||
        !isAPIErrorCode(parsed["code"])) {
        return;
    }
    return {
        ...parsed,
        code: parsed["code"],
        message: parsed["message"],
    };
}
/*
 * Type guards
 */
function isAPIErrorCode(code) {
    return (typeof code === "string" &&
        Object.values(APIErrorCode).includes(code));
}
function isGotTimeoutError(error) {
    return (error instanceof Error &&
        error.name === "TimeoutError" &&
        "event" in error &&
        typeof error["event"] === "string" &&
        helpers_1.isObject(error["request"]) &&
        helpers_1.isObject(error["timings"]));
}
function isGotHTTPError(error) {
    return (error instanceof Error &&
        error.name === "HTTPError" &&
        "request" in error &&
        helpers_1.isObject(error["request"]) &&
        "response" in error &&
        helpers_1.isObject(error["response"]) &&
        "timings" in error &&
        helpers_1.isObject(error["timings"]));
}
//# sourceMappingURL=errors.js.map