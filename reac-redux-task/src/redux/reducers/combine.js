import { combineReducers } from "redux";
import userReducer from '../reducers/user-reducer';

const reducers = combineReducers({
     user :userReducer,
});

export default reducers;
