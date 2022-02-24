import {combineReducers} from 'redux';
import projectReducer from "../Components/reducer";
import LoginReducer from "../pages/reducer";

export default combineReducers({
  projectReducer,
  LoginReducer
})