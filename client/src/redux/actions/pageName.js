import { PAGE_NAME } from "./types";

export const pageName = (page) => (dispatch) => {
  dispatch({
    type: PAGE_NAME,
    payload: page,
  })

}