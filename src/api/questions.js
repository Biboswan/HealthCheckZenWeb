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
