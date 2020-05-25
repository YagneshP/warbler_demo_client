import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticate: false, // hopefully turn true when log in
    user: {}  // all the user info store in this key object when log in
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                // turn empty object into false or if there are keys , true
                isAuthenticate: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
};