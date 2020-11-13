import { CHANGE_SERVICES } from "../actions/types";

const initialState = {
  type: "development",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case CHANGE_SERVICES:
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
}
