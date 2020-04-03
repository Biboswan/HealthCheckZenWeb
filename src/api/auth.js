import { API_ROOT } from "../constants";
import axios from "axios";

const axiosConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

/**
 * Create Account
 * @returns {Promise}
 */
export const signup = async ({ email_id, password, age }) => {
  return axios.post(`${API_ROOT}/signup`, { email_id, password, age }, axiosConfig);
};

/**
 * Login into account
 * @returns {Promise}
 */
export const login = async (email_id, password) => {
  return axios.post(`${API_ROOT}/login`, { email_id, password }, axiosConfig);
};
