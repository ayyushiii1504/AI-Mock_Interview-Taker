import axios from "axios";


const API_BASE_URL = "http://localhost:18000/api"; 
export const loginUser = async (email, password) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
};

export const signupUser = async (name, email, password) => {
    return await axios.post(`${API_BASE_URL}/auth/signup`, { name, email, password });
  };
  
