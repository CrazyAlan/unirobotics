import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PromotionsReducer from './reducer_promotions';
import CoursesReducer from './reducer_courses';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  promotions: PromotionsReducer,
  courses: CoursesReducer

});

export default rootReducer;
