import { FETCH_COURSES, FETCH_A_COURSE } from '../actions/index';

const INITIAL_STATE = { all: null, aCourse: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_COURSES:
    return { ...state, all: action.payload };
  case FETCH_A_COURSE:
  	return { ...state, aCourse: action.payload};
  default:
    return state;
  }
}