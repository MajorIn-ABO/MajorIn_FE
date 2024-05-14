import axios from "axios";

const API_BASE_URL = "http://3.35.123.253/api";

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    console.log("서버로부터의 응답:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSignUpData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    console.log("서버로부터의 응답:", response.data);
    return "성공";
    // return response.data;
  } catch (error: any) {
    // console.log(error);
    // console.log(error.request.response);
    return "실패";
  }
};
