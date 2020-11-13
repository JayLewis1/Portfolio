import { CHANGE_PROJECT } from "./types";

export const changeProject = (project) =>  (dispatch) => {
  dispatch({
    type: CHANGE_PROJECT,
    payload: project,
  });
};