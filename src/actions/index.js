import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_PROMOTIONS = 'FETCH_PROMOTIONS';
export const FETCH_COURSES = 'FETCH_COURSES';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw';
const promotions = [
                    {'course': 'Dance Courses', 'level': 'beginner','id': 0, 'img': 'assets/img/mine/lego.jpg', 'duration': '6 months', 'description': 'Curabitur eget tortor sed urna faucibus iaculis id et nulla.'},
                    {'course': 'Dance Courses', 'level': 'intermediate' ,'id': 1, 'img': 'assets/img/mine/arduino.jpg', 'duration': '6 months', 'description': 'Curabitur eget tortor sed urna faucibus iaculis id et nulla.'},
                    {'course': 'Dance Courses', 'level': 'advanced' ,'id': 2, 'img': 'assets/img-temp/slider1.jpg', 'duration': '6 months', 'description': 'Curabitur eget tortor sed urna faucibus iaculis id et nulla.'}
                   ];
const courses = {
                  title: 'Our courses',
                  description: 'Learn something',
                  courses: [
                               {course: 'Dance Courses', level: 'beginner', id: 0, img: 'assets/img-temp/course1.jpg', price: 150, description: 'Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.', duration: 6},
                               {course: 'Dance Courses', level: 'beginner', id: 0, img: 'assets/img-temp/course1.jpg', price: 150, description: 'Curabitur eget tortor sed urna faucibus iaculis id et nulla. Tortor sed urna faucibus iaculis id et nulla.', duration: 6}
                             ]
                };

export function fetchPromotions(){

  return {
    type: FETCH_PROMOTIONS,
    payload: promotions
  }
}

export function fetchCourses(){

  return {
    type: FETCH_COURSES,
    payload: courses
  }
}

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
