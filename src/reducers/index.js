import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PromotionsReducer from './reducer_promotions';
import CoursesReducer from './reducer_courses';
import TeachersReducer from './reducer_teachers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  promotions: PromotionsReducer,
  courses: CoursesReducer,
  teachers: TeachersReducer

});

export default rootReducer;
