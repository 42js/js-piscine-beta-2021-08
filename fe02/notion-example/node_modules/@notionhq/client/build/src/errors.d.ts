/// <reference types="node" />
import type { IncomingHttpHeaders } from "http";
import type { Response as GotResponse } from "got";
export declare class RequestTimeoutError extends Error {
    readonly code = "notionhq_client_request_timeout";
    constructor(message?: string);
    static isRequestTimeoutError(error: unknown): error is RequestTimeoutError;
}
export declare class HTTPResponseError extends Error {
    readonly code: string;
    readonly status: number;
    readonly headers: IncomingHttpHeaders;
    readonly body: string;
    constructor(response: GotResponse, message?: string);
    static isHTTPResponseError(error: unknown): error is HTTPResponseError;
}
/**
 * Error codes for responses from the API.
 */
export declare enum APIErrorCode {
    Unauthorized = "unauthorized",
    RestrictedResource = "restricted_resource",
    ObjectNotFound = "object_not_found",
    RateLimited = "rate_limited",
    InvalidJSON = "invalid_json",
    InvalidRequestURL = "invalid_request_url",
    InvalidRequest = "invalid_request",
    ValidationError = "validation_error",
    ConflictError = "conflict_error",
    InternalServerError = "internal_server_error",
    ServiceUnavailable = "service_unavailable"
}
/**
 * Body of an error response from the API.
 */
interface APIErrorResponseBody {
    code: APIErrorCode;
    message: string;
}
/**
 * A response from the API indicating a problem.
 *
 * Use the `code` property to handle various kinds of errors. All its possible values are in `APIErrorCode`.
 */
export declare class APIResponseError extends HTTPResponseError implements APIErrorResponseBody {
    readonly code: APIErrorCode;
    constructor(response: GotResponse, body: APIErrorResponseBody);
    static isAPIResponseError(error: unknown): error is APIResponseError;
}
declare type RequestError = RequestTimeoutError | HTTPResponseError;
export declare function buildRequestError(error: unknown): RequestError | undefined;
export {};
//# sourceMappingURL=errors.d.ts.map