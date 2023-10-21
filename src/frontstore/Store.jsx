import { createStoreHook } from "react-redux";
import rootReducer from "./reducers/index";

const store = createStoreHook(rootReducer);
export default store; 