export default function returnErrorMessage(
  method: string,
  path: string,
  code: number,
  message: string,
  input: any,
): string {
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
