import { Router } from 'express';

import db from '../models/db';

const questionsRouter = Router();

questionsRouter.post('', (req, res) => {
  console.log(req.body);
  if (
    req.body.userId === undefined ||
    req.body.content === undefined ||
    req.body.userId.length === 0 ||
    req.body.content.length === 0 ||
    Object.keys(req.body).length === 0
  ) {
    res.status(400).send({ message: 'Content is missing' });
  } else {
    const date = new Date();
    db.Question.create({
      userId: req.body.userId,
      content: req.body.content,
      created_at: date,
      updated_at: date,
    })
      .then((question) => {
        res
          .status(200)
          .send({ message: 'Question added successfully.', question });
      })
      .catch((err) => {
        res.status(400).send({ message: String(err) });
      });
  }
});

export default questionsRouter;
