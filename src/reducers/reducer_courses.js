import { FETCH_COURSES } from '../actions/index';

const INITIAL_STATE = { all: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_COURSES:
    return { ...state, all: action.payload };
  default:
    return state;
  }
}