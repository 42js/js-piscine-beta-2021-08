import { Request, Response } from 'express';

export function sendIssueResponse(req: Request, res: Response): void {
  console.log(res.statusCode);
  res.send();
}

export function sendVerifyResponse(req: Request, res: Response): void {
  console.log(res.statusCode);
  res.send();
}
