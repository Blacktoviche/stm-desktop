import {
    SWITCH_ADMIN_HOME_BODY,

} from './types.jsx';

import * as backend from '../backend/Backend.jsx';
import { SWITCH_HOME_BODY } from '../actions/types.jsx';

export const routeTo = (component) => (dispatch) => {
    dispatch({
        type: SWITCH_HOME_BODY,
        payload: component
    });
};