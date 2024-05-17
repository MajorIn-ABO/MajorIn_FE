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

// 토큰을 포함한 상태에서 post 요청 메소드
export const postTokenData = async (endpoint: string, formData: FormData) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;
  const userId = auth ? auth.user_id : null;

  formData.append("user_id", userId);
  const imgfile = formData.get("imgfile");

  if (!accessToken) {
    throw new Error("Access token is not available");
  }
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log("서버로부터의 응답:", response.data);
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
