import { Types } from '../constants/user-types';

const initialState = {
    saveusermessage:"",
    loginstatus:false,
    users :Array
};
export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_SIGN_IN_MESSAGE:
            return {...state, saveusermessage: action.payload}
        case Types.LOGIN_STATUS:
            return {...state, loginstatus: action.payload}
            case Types.USER_LIST:
                console.log(typeof  action.payload);
                // return {...state, users: []}
            default:
            return state;
    }
}