import { combineReducers } from "redux";

import services from "./services";
import portfolio from "./portfolio";
import pageName from "./pageName";

export default combineReducers({
  service: services,
  project: portfolio,
  page: pageName,
});
