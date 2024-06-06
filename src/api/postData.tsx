import axios from "axios";

const API_BASE_URL = "http://3.35.123.253/api";

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    console.log("서버로부터의 응답:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(data);
  }
};

// 토큰을 포함한 상태에서 이미지 포함한 post 요청 메소드
export const postTokenData = async (endpoint: string, formData: FormData) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;
  const userId = auth ? auth.user_id : null;

  formData.append("user_id", userId);

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

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postTextData = async (endpoint: string, data: any) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;
  const userId = auth ? auth.user_id : null;
  const postData = { ...data, user_id: userId };
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, postData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSold = async (endpoint: string) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSignUpData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return "성공";
  } catch (error: any) {
    return "실패";
  }
};
