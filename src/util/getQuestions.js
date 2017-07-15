import { get, post } from './getPostMethods';

function getAllQuestions(callback) {
  get('/questions', callback);
}

function getQuestionsByUserId(userId, callback) {
  get(`/questions/${userId}`, callback);
}

function getCurrentUserQuestions(userId, callback) {
  console.log('GETTING CURRENT USER QUESTIONS ', userId)
  let body = { userId };
  post(`/questions/current_user`, body, callback);
}

export { getAllQuestions, getQuestionsByUserId, getCurrentUserQuestions };
