import axios from "axios";

const API_URL = "http://localhost:8087/api/todos";

export const addTodoApi = (todo) => {
  return axios.post(API_URL, todo);
};

export const updateTodoApi = (id, todo) => {
  return axios.put(`${API_URL}/${id}`, todo);
};

export const deleteTodoApi = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getTodos = () => {
  return axios.get(API_URL);
};

export const getTodosByUser = (email) => {
  return axios.get(`${API_URL}/user/${email}`);
};