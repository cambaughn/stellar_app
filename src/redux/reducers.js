
import { combineReducers } from 'redux';

function currentUser(state = {id: 2}, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user;
    default:
      return state;
  }
}

function focusedUser(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_FOCUSED_USER':
      return action.user;
    default:
      return state;
  }
}

function focusedUserQuestions(state = [], action) {
  switch (action.type) {
    case 'SET_FOCUSED_USER_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
}


function questions(state = [], action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
}

function selectedTab(state = 'home', action) {
  switch (action.type) {
    case 'SET_SELECTED_TAB':
      return action.selected;
    default:
      return state;
  }
}

const stellarApp = combineReducers({
  currentUser,
  focusedUser,
  focusedUserQuestions,
  questions,
  users,
  selectedTab
});

export { currentUser, questions, users, focusedUser, focusedUserQuestions, selectedTab, stellarApp };
