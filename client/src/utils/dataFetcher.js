import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function postData(endpoint, data, token = null) {
  try {
    const response = await axios.post(
      `${BASE_URL}${endpoint}`,
      data,
      token && {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getData(endpoint, token=null) {
  try {
    const response = await axios.get(
      `${BASE_URL}${endpoint}`,
      token && {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateData(endpoint, data, token=null) {
  try {
    const response = await axios.patch(
      `${BASE_URL}${endpoint}`,
      data,
      token && {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteData(endpoint , token=null) {
  try {
    const response = await axios.delete(
      `${BASE_URL}${endpoint}`,
      token && {
        headers : {
          Authorization: token
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
