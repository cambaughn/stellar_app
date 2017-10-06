/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import {
  UPDATE_USER,
  SET_QUESTIONS,
  SET_USERS,
  UPDATE_FOCUSED_USER,
  SET_FOCUSED_USER_QUESTIONS,
  SET_SEARCH_RESULTS
} from './actionTypes';

function setUsers(users) {
  return {
    type: SET_USERS,
    users
  }
}

function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

function updateCurrentUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

function updateFocusedUser(user) {
  return {
    type: UPDATE_FOCUSED_USER,
    user
  }
}

function setFocusedUserQuestions(questions) {
  return {
    type: SET_FOCUSED_USER_QUESTIONS,
    questions
  }
}

function setSearchResults(searchResults) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults
  }
}


export {
  setUsers,
  setQuestions,
  updateCurrentUser,
  updateFocusedUser,
  setFocusedUserQuestions,
  setSearchResults,
};
