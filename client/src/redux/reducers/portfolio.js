import { CHANGE_PROJECT} from "../actions/types";

const initialState = {
  type: "all",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case CHANGE_PROJECT :
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
}
