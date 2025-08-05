import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://127.0.0.1:8000";

const apiClientWithFile = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

export interface CVUploadRequest {
  user_id: string;
  cv_file: File;
}

export const formAPI = {
  uploadCv: ({ user_id, cv_file }: CVUploadRequest) => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("cv_file", cv_file);
    return apiClientWithFile.post("/documents/upload/cv", formData);
  },

  submitDegrees: (data: FormData) =>
  axios.post('users/{user_id}/submit/education', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

export default apiClientWithFile;
