import {PAGE_NAME} from "../actions/types"

const initialState = {
  page : "",
}

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case PAGE_NAME :
      return {
        ...state,
        page: payload
      };
    default : 
    return state;
  }
}