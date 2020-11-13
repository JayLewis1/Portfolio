import { combineReducers } from "redux";

import services from "./services";
import portfolio from "./portfolio";

export default combineReducers({
  service: services,
  project: portfolio,
});
