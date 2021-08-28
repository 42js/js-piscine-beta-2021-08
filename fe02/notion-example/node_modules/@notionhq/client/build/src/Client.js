"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_auth, _Client_logLevel, _Client_logger, _Client_got;
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const logging_1 = require("./logging");
const errors_1 = require("./errors");
const helpers_1 = require("./helpers");
const api_endpoints_1 = require("./api-endpoints");
const got_1 = require("got");
class Client {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        _Client_auth.set(this, void 0);
        _Client_logLevel.set(this, void 0);
        _Client_logger.set(this, void 0);
        _Client_got.set(this, void 0);
        /*
         * Notion API endpoints
         */
        this.blocks = {
            children: {
                /**
                 * Append block children
                 */
                append: (args) => {
                    return this.request({
                        path: api_endpoints_1.blocksChildrenAppend.path(args),
                        method: api_endpoints_1.blocksChildrenAppend.method,
                        query: helpers_1.pick(args, api_endpoints_1.blocksChildrenAppend.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.blocksChildrenAppend.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
                /**
                 * Retrieve block children
                 */
                list: (args) => {
                    return this.request({
                        path: api_endpoints_1.blocksChildrenList.path(args),
                        method: api_endpoints_1.blocksChildrenList.method,
                        query: helpers_1.pick(args, api_endpoints_1.blocksChildrenList.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.blocksChildrenList.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.databases = {
            /**
             * List databases
             *
             * @deprecated Please use `search`
             */
            list: (args = {}) => {
                return this.request({
                    path: api_endpoints_1.databasesList.path(),
                    method: api_endpoints_1.databasesList.method,
                    query: helpers_1.pick(args, api_endpoints_1.databasesList.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.databasesList.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a database
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.databasesRetrieve.path(args),
                    method: api_endpoints_1.databasesRetrieve.method,
                    query: helpers_1.pick(args, api_endpoints_1.databasesRetrieve.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.databasesRetrieve.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Query a database
             */
            query: (args) => {
                return this.request({
                    path: api_endpoints_1.databasesQuery.path(args),
                    method: api_endpoints_1.databasesQuery.method,
                    query: helpers_1.pick(args, api_endpoints_1.databasesQuery.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.databasesQuery.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.pages = {
            /**
             * Create a page
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.pagesCreate.path(),
                    method: api_endpoints_1.pagesCreate.method,
                    query: helpers_1.pick(args, api_endpoints_1.pagesCreate.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.pagesCreate.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a page
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.pagesRetrieve.path(args),
                    method: api_endpoints_1.pagesRetrieve.method,
                    query: helpers_1.pick(args, api_endpoints_1.pagesRetrieve.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.pagesRetrieve.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update page properties
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.pagesUpdate.path(args),
                    method: api_endpoints_1.pagesUpdate.method,
                    query: helpers_1.pick(args, api_endpoints_1.pagesUpdate.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.pagesUpdate.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.users = {
            /**
             * Retrieve a user
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.usersRetrieve.path(args),
                    method: api_endpoints_1.usersRetrieve.method,
                    query: helpers_1.pick(args, api_endpoints_1.usersRetrieve.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.usersRetrieve.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * List all users
             */
            list: (args = {}) => {
                return this.request({
                    path: api_endpoints_1.usersList.path(),
                    method: api_endpoints_1.usersList.method,
                    query: helpers_1.pick(args, api_endpoints_1.usersList.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.usersList.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        __classPrivateFieldSet(this, _Client_auth, options === null || options === void 0 ? void 0 : options.auth, "f");
        __classPrivateFieldSet(this, _Client_logLevel, (_a = options === null || options === void 0 ? void 0 : options.logLevel) !== null && _a !== void 0 ? _a : logging_1.LogLevel.WARN, "f");
        __classPrivateFieldSet(this, _Client_logger, (_b = options === null || options === void 0 ? void 0 : options.logger) !== null && _b !== void 0 ? _b : logging_1.makeConsoleLogger(this.constructor.name), "f");
        const prefixUrl = ((_c = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _c !== void 0 ? _c : "https://api.notion.com") + "/v1/";
        const timeout = (_d = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _d !== void 0 ? _d : 60000;
        const notionVersion = (_e = options === null || options === void 0 ? void 0 : options.notionVersion) !== null && _e !== void 0 ? _e : Client.defaultNotionVersion;
        __classPrivateFieldSet(this, _Client_got, got_1.default.extend({
            prefixUrl,
            timeout,
            headers: {
                "Notion-Version": notionVersion,
                // TODO: update with format appropriate for telemetry, use version from package.json
                "user-agent": "notionhq-client/0.1.0",
            },
            retry: 0,
            agent: makeAgentOption(prefixUrl, options === null || options === void 0 ? void 0 : options.agent),
        }), "f");
    }
    /**
     * Sends a request.
     *
     * @param path
     * @param method
     * @param query
     * @param body
     * @returns
     */
    async request({ path, method, query, body, auth, }) {
        this.log(logging_1.LogLevel.INFO, "request start", { method, path });
        // If the body is empty, don't send the body in the HTTP request
        const json = body !== undefined && Object.entries(body).length === 0 ? undefined : body;
        try {
            const response = await __classPrivateFieldGet(this, _Client_got, "f").call(this, path, {
                method,
                searchParams: query,
                json,
                headers: this.authAsHeaders(auth),
            }).json();
            this.log(logging_1.LogLevel.INFO, `request success`, { method, path });
            return response;
        }
        catch (error) {
            // Build an error of a known type, otherwise throw unexpected errors
            const requestError = errors_1.buildRequestError(error);
            if (requestError === undefined) {
                throw error;
            }
            this.log(logging_1.LogLevel.WARN, `request fail`, {
                code: requestError.code,
                message: requestError.message,
            });
            if (errors_1.HTTPResponseError.isHTTPResponseError(requestError)) {
                // The response body may contain sensitive information so it is logged separately at the DEBUG level
                this.log(logging_1.LogLevel.DEBUG, `failed response body`, {
                    body: requestError.body,
                });
            }
            // Throw as a known error type
            throw requestError;
        }
    }
    /**
     * Search
     */
    search(args) {
        return this.request({
            path: api_endpoints_1.search.path(),
            method: api_endpoints_1.search.method,
            query: helpers_1.pick(args, api_endpoints_1.search.queryParams),
            body: helpers_1.pick(args, api_endpoints_1.search.bodyParams),
            auth: args === null || args === void 0 ? void 0 : args.auth,
        });
    }
    /**
     * Emits a log message to the console.
     *
     * @param level The level for this message
     * @param args Arguments to send to the console
     */
    log(level, message, extraInfo) {
        if (logging_1.logLevelSeverity(level) >= logging_1.logLevelSeverity(__classPrivateFieldGet(this, _Client_logLevel, "f"))) {
            __classPrivateFieldGet(this, _Client_logger, "f").call(this, level, message, extraInfo);
        }
    }
    /**
     * Transforms an API key or access token into a headers object suitable for an HTTP request.
     *
     * This method uses the instance's value as the default when the input is undefined. If neither are defined, it returns
     * an empty object
     *
     * @param auth API key or access token
     * @returns headers key-value object
     */
    authAsHeaders(auth) {
        const headers = {};
        const authHeaderValue = auth !== null && auth !== void 0 ? auth : __classPrivateFieldGet(this, _Client_auth, "f");
        if (authHeaderValue !== undefined) {
            headers["authorization"] = `Bearer ${authHeaderValue}`;
        }
        return headers;
    }
}
exports.default = Client;
_Client_auth = new WeakMap(), _Client_logLevel = new WeakMap(), _Client_logger = new WeakMap(), _Client_got = new WeakMap();
Client.defaultNotionVersion = "2021-05-13";
/*
 * Helper functions
 */
function makeAgentOption(prefixUrl, agent) {
    if (agent === undefined) {
        return undefined;
    }
    return {
        [selectProtocol(prefixUrl)]: agent,
    };
}
function selectProtocol(prefixUrl) {
    const url = new url_1.URL(prefixUrl);
    if (url.protocol === "https:") {
        return "https";
    }
    else if (url.protocol === "http:") {
        return "http";
    }
    throw new TypeError(`baseUrl option must begin with "https://" or "http://"`);
}
//# sourceMappingURL=Client.js.map