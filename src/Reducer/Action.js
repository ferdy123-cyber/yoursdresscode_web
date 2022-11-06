import { message } from "antd";
import axios from "axios";

const BASE_URL = "http://localhost/YoursDresscode-server/api";

const err_handle = (err) => {
  // console.log(err);
  if (err.response.data.message) {
    message.error(err.response.data.message);
  } else if (err.message) {
    message.error(err.message);
  } else {
    message.error("Terjadi masalah server");
  }
};

export const getListAdmin = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: true });
  axios
    .get(`${BASE_URL}/user?role_id=1`)
    .then((resp) => {
      dispatch({ type: "GET_LIST_ADMIN", value: resp.data.data });
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    })
    .catch((err) => {
      err_handle(err);
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    });
};

export const deleteListAdmin = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: true });
  axios
    .delete(`${BASE_URL}/user/${data}`)
    .then((resp) => {
      dispatch(getListAdmin());
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
      message.success("Berhasil hapus admin");
    })
    .catch((err) => {
      err_handle(err);
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    });
};

export const addListAdmin = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: true });
  axios
    .post(`${BASE_URL}/registrasi/`, data)
    .then((resp) => {
      dispatch(getListAdmin());
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
      message.success("Berhasil tambah admin");
    })
    .catch((err) => {
      err_handle(err);
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    });
};

export const editListAdmin = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: true });
  axios
    .put(`${BASE_URL}/user/${data.id}`, data)
    .then((resp) => {
      dispatch(getListAdmin());
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
      message.success("Berhasil edit admin");
    })
    .catch((err) => {
      err_handle(err);
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    });
};

export const login = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: true });
  axios
    .post(`${BASE_URL}/login`, data)
    .then((resp) => {
      localStorage.setItem("user_credent", JSON.stringify(resp.data.data));
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
      message.success(resp.data.message);
      window.location.reload(false);
      // if (resp.data.data.role_id === 2) {
      //   data.navigate("/ok");
      // } else {
      //   data.navigate("/admin");
      // }
    })
    .catch((err) => {
      err_handle(err);
      dispatch({ type: "CHANGE_FETCHING_USER_REDUCER", value: false });
    });
};
