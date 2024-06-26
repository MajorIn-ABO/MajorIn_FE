import axios from "axios";

const API_BASE_URL = "http://3.37.196.198:8000";

export const postStudentCard = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await axios.post(
      `${API_BASE_URL}/perform_ocr/`,
      formData,
      {
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log(formData);
    // console.log(formData);
  }
};
