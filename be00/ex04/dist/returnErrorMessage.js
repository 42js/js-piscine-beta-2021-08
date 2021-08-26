"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnErrorMessage(method, path, code, message, input) {
    const errorMessage = {
        method: '',
        access_path: '',
        status_code: 0,
        error_message: '',
        your_input: '',
    };
    errorMessage.method = method;
    errorMessage.access_path = path;
    errorMessage.status_code = code;
    errorMessage.error_message = message;
    errorMessage.your_input = input;
    return JSON.stringify(errorMessage);
}
exports.default = returnErrorMessage;
