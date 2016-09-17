import axios from 'axios';
import * as data from './data'
import * as dataCn from './dataCn'
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_PROMOTIONS = 'FETCH_PROMOTIONS';
export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_CONFIG = 'FETCH_CONFIG';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkajdsfapipwietpw';

var language = 'en';

export function updateConfig(lang){
  language = lang;

  return {
    type: UPDATE_CONFIG,
    payload: lang
  }
}

export function fetchPromotions(){
  
  return {
    type: FETCH_PROMOTIONS,
    payload: language === 'cn' ? dataCn.promotions : data.promotions
  }
}

export function fetchCourses(){

  return {
    type: FETCH_COURSES,
    payload: language === 'cn' ? dataCn.courses : data.courses
  }
}

export function fetchTeachers(){

  return {
    type: FETCH_TEACHERS,
    payload: language === 'cn' ? dataCn.teachers : data.teachers
  }
}

export function fetchData(){
  
  return {
    type: FETCH_DATA,
    payload: language === 'cn' ? dataCn : data
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
