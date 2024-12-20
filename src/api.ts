import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
});

export const fetchItems = () => API.get('/items/get_all_items');
export const createUser = (userData: any) => API.post('/register', userData);
export const loginUser = (credentials: any) => API.post('/login', credentials);
export const addItem = (itemData: any, file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  Object.keys(itemData).forEach((key) => formData.append(key, itemData[key]));

  return API.post('/items', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};