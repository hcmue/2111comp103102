import * as Types from '../contants/Types';

const initAuthenState = {
    isLoggedIn: false,
    token: '',
    username: '',
    fullname: ''
};

export const authenReducer = (state = initAuthenState, action) => {
    switch (action.type) {
        case Types.UserService.LOGIN_SUCCESS:
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.fullname = action.payload.fullname;
            return state;

        case Types.UserService.LOGOUT:
            state.isLoggedIn = false;
            state.token = '';
            state.username = '';
            state.fullname = '';
            return state;

        default: return state;
    }
};
