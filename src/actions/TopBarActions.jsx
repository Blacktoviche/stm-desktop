import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_USER,
    START_SETUP_LOGIN,
    TOGGLE_SIDEBAR
} from './types.jsx';

import * as backend from '../backend/Backend.jsx';

export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR,
    };
};

export const logout = () => {
    return dispatch => {
        backend.logout(dispatch);
    };
};