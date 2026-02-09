import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/user";

export const getUsers = () => axios.get(API_URL);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (data) =>
  axios.post(`${API_URL}/create`, data);
export const updateUser = (id, data) =>
  axios.put(`${API_URL}/update/${id}`, data);
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`);
