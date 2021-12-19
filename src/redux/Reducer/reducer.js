import {
  DELETE_DETAILS,
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
} from "../type";

const initialState = {
  details: [],
  isResponse: false,
  isUpdatedResponse: false,
  isDeleteResponse: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };

    case POST_DETAILS:
      return {
        isResponse: action.payload,
      };

    case DELETE_DETAILS:
      return {
        isDeleteResponse: action.payload,
      };

    case UPDATE_DETAILS:
      return {
        isUpdateResponse: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
