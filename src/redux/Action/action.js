import {
  GET_DETAILS,
  POST_DETAILS,
  DELETE_DETAILS,
  GET_DETAILS_BY_ID,
  UPDATE_DETAILS,
} from "../type";
import {
  GetApiDetails,
  PostApiDetails,
  DeleteApiDetails,
  GetApiDetailsById,
  UpdateDetailsById,
} from "../../api/AxiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log(res);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostApiDetails(request).then((res) => {
      console.log(res);
      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};

const DeleteApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return DeleteApiDetails(id).then((res) => {
      console.log(res);
      dispatch({
        type: DELETE_DETAILS,
        payload: true,
      });
    });
  };
};

const UpdateApiAction = (data, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateDetailsById(data, id).then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};

export { GetApiAction, PostApiAction, DeleteApiAction, UpdateApiAction };
