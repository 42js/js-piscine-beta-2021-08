import { Router } from 'express';

import db from '../models/db';

const answerRouter = Router();

answerRouter.post('', (req, res) => {
  console.log(req.body);
  if (
    req.body.userId === undefined ||
    req.body.questionId === undefined ||
    req.body.content === undefined ||
    req.body.userId.length === 0 ||
    req.body.questionId.length === 0 ||
    req.body.content.length === 0 ||
    Object.keys(req.body).length === 0
  ) {
    res.status(400).send({ message: 'Content is missing' });
  } else {
    const date = new Date();
    db.Answer.create({
      userId: req.body.userId,
      questionId: req.body.questionId,
      // emoji!!!!
      content: req.body.content.toString(),
      created_at: date,
      updated_at: date,
    })
      .then((answer) => {
        res.status(200).send({ message: 'Answer added successfully.', answer });
      })
      .catch((err) => {
        res.status(400).send({ message: String(err) });
      });
  }
});

export default answerRouter;
