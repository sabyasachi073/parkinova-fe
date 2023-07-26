import axios from "axios";
import { HOST } from "../environments";

const signUp = (fullName, email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(`${HOST}/auth/signup`, {
        fullName,
        email,
        password,
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};


const signIn = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(`${HOST}/auth/signin`, {
        email,
        password,
      });
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const signOut = () => {
  const token = localStorage.getItem("access_token");

  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.delete(`${HOST}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("access_token");
      resolve(result.data);
    } catch (error) {
      localStorage.removeItem("access_token");
      reject(error);
    }
  });
};

const uploadImg = (formData) => {
  const token = localStorage.getItem("access_token");

  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(`${HOST}/image/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      resolve(result.data);
    } catch (error) {
      // console.log("Error uploading image:", error);
      if (error.response.status !== 500) {
        localStorage.removeItem("access_token");
        window.location.href = "/signin";
      } else {
        reject(error.response);
      }
    }
  });
};


const fetchUserData = () => {
  const token = localStorage.getItem("access_token");
  
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(`${HOST}/auth/fetch-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchUserLatestImages = () => {
  const token = localStorage.getItem("access_token");
  
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(`${HOST}/image/fetch-latest`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchUserImages = () => {
  const token = localStorage.getItem("access_token");
  
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(`${HOST}/image/fetch-others`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export { signUp, signIn, signOut, uploadImg, fetchUserData, fetchUserLatestImages, fetchUserImages };
