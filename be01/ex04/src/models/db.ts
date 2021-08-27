import { Sequelize } from 'sequelize';
import sequelize from './index';
import User from './user.models';
import Question from './question.models';
import Answer from './answer.models';

User.hasMany(Question, {
  sourceKey: 'id',
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Question.hasMany(Answer, {
  sourceKey: 'id',
  foreignKey: 'questionId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Answer.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
Answer.belongsTo(Question, { foreignKey: 'questionId', targetKey: 'id' });

const db = { sequelize, Sequelize, User, Question, Answer };

export default db;
