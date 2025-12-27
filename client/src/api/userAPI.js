import { postData, getData } from "../utils/dataFetcher";

const registerNewUser = async (data) => {
  try {
    const result = await postData("/user" , data);
    return result;
  } catch (error) {
    throw error;
  }
}

const loginUser = async (data) => {
  try {
    const result = await postData("/user/login" , data);
    return result;
  } catch (error) {
    throw error;
  }
}

const getAllCoursesOfOneUser = async (token) => {
  try {
    const result = await getData("/user/courses" , token);
    return result;
  } catch (error) {
    throw error;
  }
}

export {registerNewUser , loginUser , getAllCoursesOfOneUser};