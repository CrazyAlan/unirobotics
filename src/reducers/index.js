import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PromotionsReducer from './reducer_promotions';
import CoursesReducer from './reducer_courses';
import TeachersReducer from './reducer_teachers';
import DataReducer from './reducer_data';
import ConfigReducer from './reducer_config';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  promotions: PromotionsReducer,
  courses: CoursesReducer,
  teachers: TeachersReducer,
  data: DataReducer,
  config: ConfigReducer
  
});

export default rootReducer;
