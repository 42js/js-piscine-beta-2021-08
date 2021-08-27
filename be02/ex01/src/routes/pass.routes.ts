import { Router } from 'express';

const passRouter = Router();

passRouter.get('', (req, res) => {
  if (req.cookies.special_cookie === '42')
    return res.json({ msg: '🍪 쿠키의 세상에 오신 걸 환영 합니다~! 🍪' });
  return res.json({ msg: '🍪 쿠키의 세상에 아무나 출입 할 수 없습니다!! 🍪' });
});

export default passRouter;
