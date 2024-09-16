import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_SERVER_URL;

export const fetchData = async (endpoint: string) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  let majorId = auth ? auth.major_id : null;

  if (!majorId) {
    const selectedMajorId = localStorage.getItem("selected_major_id");
    majorId = selectedMajorId ? parseInt(selectedMajorId) : null;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/${majorId}${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNoMajorData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNoMajorTokenData = async (endpoint: string) => {
  const storedAuth = localStorage.getItem("auth");
  const auth = storedAuth ? JSON.parse(storedAuth) : null;
  const accessToken = auth ? auth.access_token : null;

  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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
