import { Request, Response } from 'express';

export function sendIssueResponse(req: Request, res: Response): void {
  console.log(res.statusCode);
  if (res.statusCode !== 200) {
    res.json({
      msg: '🍪 여권 발급 실패! 🍪',
      reason: [res.statusMessage],
    });
  } else {
    res.json({
      msg: '🍪 여권 발급 성공! 🍪',
    });
  }
  res.send();
}

export function sendVerifyResponse(req: Request, res: Response): void {
  console.log(res.statusCode);
  res.send();
}
