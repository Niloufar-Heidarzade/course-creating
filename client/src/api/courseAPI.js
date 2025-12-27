import {
  getData, 
  postData,
  updateData,
  deleteData
} from "../utils/dataFetcher";

const getAllCourses = async () => {
  try {
    const result = await getData("/course");
    return result;
  } catch (error) {
    throw error;
  }
}

const createNewCourse = async (data) => {
  try {
    const result = await postData("/course" , data);
    return result;
  } catch (error) {
    throw error;
  }
}

const deleteCourse = async (id) => {
  try {
    const result = await deleteData(`/course/${id}`);
    return result;
  } catch (error) {
    throw error;
  }
}

const updateCourse = async (id , data) => {
  try {
    const result = await updateData(`/course/${id}` , data);
    return result;
  } catch (error) {
    throw error;
  }
}

export {getAllCourses , createNewCourse , updateCourse , deleteCourse};