import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Main from './components';
import CoursePage from './components/courses';
import ContactPage from './components/contacts';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="courses" component={CoursePage} />
    <Route path="courses/?courseID=:courseID" component={CoursePage} />
    <Route path="contacts" component={ContactPage} />
  </Route>
);
