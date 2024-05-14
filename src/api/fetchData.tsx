import axios from "axios";

const API_BASE_URL = "http://3.35.123.253/api";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
