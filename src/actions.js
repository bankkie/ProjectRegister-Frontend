import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
} from "./actionTypes";

import UserService from "./api/userService";

export const createUser =
  (FirstName, LastName, PhoneNumber, Username, Password, Email) => async (dispatch) => {
    try {
      const res = await UserService.create({data: {FirstName, LastName, PhoneNumber, Username, Password, Email}});

      dispatch({
        type: CREATE_USER,

        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();

    dispatch({
      type: RETRIEVE_USERS,

      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserService.update(id, data);

    dispatch({
      type: UPDATE_USER,

      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserService.delete(id);

    dispatch({
      type: DELETE_USER,

      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
