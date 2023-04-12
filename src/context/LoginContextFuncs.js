import Axios from "../lib/Axios";

export const axiosLogin = async (dispatch, loginData) => {
  try {
    const response = await Axios.post(`/users/login`, loginData);
  } catch (e) {}
};
