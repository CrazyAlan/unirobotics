import axios from 'axios';
import * as data from './data'
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_PROMOTIONS = 'FETCH_PROMOTIONS';
export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const FETCH_DATA = 'FETCH_DATA';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw';



export function fetchPromotions(){

  return {
    type: FETCH_PROMOTIONS,
    payload: data.promotions
  }
}

export function fetchCourses(){

  return {
    type: FETCH_COURSES,
    payload: data.courses
  }
}

export function fetchTeachers(){

  return {
    type: FETCH_TEACHERS,
    payload: data.teachers
  }
}

export function fetchData(){
  
  return {
    type: FETCH_DATA,
    payload: data
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
