import axios from "axios";

const baseUrl = "https://builder-service.onrender.com/api";
// const baseUrl = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const AuthAPI = {
  register: async ({ username, email, password }: any) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, {
        email,
        username,
        password,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  login: async ({ email, password }: any) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  googleLogin: async (user: any) => {
    try {
      const response = await axios.post(`${baseUrl}/google-login`, {
        accessToken: user.access_token,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(`${baseUrl}/logout`);
      localStorage.removeItem("token");

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  auth: async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth`);

      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const ProfileAPI = {
  updateProfile: async ({ username, profile_image }: any) => {
    try {
      const response = await axios.put(`${baseUrl}/update-profile`, {
        username,
        profile_image,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const CommentsAPI = {
  getComments: async ({ page, pageSize }: any) => {
    try {
      const response = await axios.get(
        `${baseUrl}/comments?page=${page}&pageSize=${pageSize}`
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  createComment: async ({ rating, text, email }: any) => {
    try {
      const response = await axios.post(`${baseUrl}/comment`, {
        rating,
        text,
        email,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  updateComment: async ({ id, rating, text }: any) => {
    try {
      const response = await axios.put(`${baseUrl}/comment/${id}`, {
        rating,
        text,
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  deleteComment: async (id: string) => {
    try {
      const response = await axios.delete(`${baseUrl}/comment/${id}`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
