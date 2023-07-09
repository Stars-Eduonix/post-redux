import { createStore } from "redux";
import apiReducer from "./reducers/apiReducer";


const store = createStore(apiReducer)

export default store