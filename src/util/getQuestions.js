import { get } from './getPostMethods';

function getAllQuestions(callback) {
  console.log('GETTING QUESTIONS')
  get('/questions', callback);
}

function getQuestionsByUserId(userId, callback) {
  get(`/questions/${userId}`, callback);
}

export { getAllQuestions, getQuestionsByUserId };
