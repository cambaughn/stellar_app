
import { combineReducers } from 'redux';

// Tact as a logged in user for development, add an id to the default state of currentUser
function currentUser(state = {id: 2, name: 'Obi-Wan Kenobi', username: 'obiwan', email: 'obi-wan@gmail.com', profile_photo: null, bio: null}, action) {
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

function search(state = { searching: false, searchResults: [] }, action) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.searchResults };
    case 'SET_SEARCHING':
      return { ...state, searching: action.searching };
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
  search
});

export { currentUser, questions, users, focusedUser, focusedUserQuestions, search, stellarApp };
