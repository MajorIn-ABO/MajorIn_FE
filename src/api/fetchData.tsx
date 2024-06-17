import axios from "axios";

const API_BASE_URL = "http://3.35.123.253/api";

export const fetchData = async (endpoint: string) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const majorId = auth ? auth.major_id : null;
  try {
    const response = await axios.get(`${API_BASE_URL}/${majorId}${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTokenData = async (endpoint: string) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;
  const majorId = auth ? auth.major_id : null;

  try {
    const response = await axios.get(`${API_BASE_URL}/${majorId}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
