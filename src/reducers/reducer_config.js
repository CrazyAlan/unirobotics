import { FETCH_CONFIG, UPDATE_CONFIG } from '../actions/index';

const INITIAL_STATE = { lang: 'en' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_CONFIG:
    return { ...state, lang: action.payload };
  case UPDATE_CONFIG:
  	return { ...state, lang: action.payload };
  default:
    return state;
  }
}