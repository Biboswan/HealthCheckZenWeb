import { API_ROOT } from "../constants";
import axios from "axios";

const axiosConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

/**
 * Fetch the questions
 * @returns {Promise}
 */
export const fetchQuestionsApi = async token => {
    return axios.get(`${API_ROOT}/question?t=${token}`, axiosConfig);
}

/**
 * Submit answers
 * @returns {Promise}
 */
export const submitAnswers = async (token, user_details) => {
  return axios.post(`${API_ROOT}/submit?t=${token}`, { user_details } , axiosConfig);
}
