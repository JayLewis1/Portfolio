import { CHANGE_SERVICES } from "./types";

export const changeServiceType = (serviceType) => (dispatch) => {
  dispatch({
    type: CHANGE_SERVICES ,
    payload: serviceType,
  });
};
