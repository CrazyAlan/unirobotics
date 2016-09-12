import { FETCH_TEACHERS } from '../actions/index';

const INITIAL_STATE = { all: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TEACHERS:
    return { ...state, all: action.payload };
  default:
    return state;
  }
}