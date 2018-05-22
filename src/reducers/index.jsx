import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer.jsx';
import HomeReducer from './HomeReducer.jsx';
import TopBarReducer from './TopBarReducer.jsx';
import BodyReducer from './BodyReducer.jsx';

import ProjectReducer from './ProjectReducer.jsx';
import TaskReducer from './TaskReducer.jsx';
import CommentReducer from './CommentReducer.jsx';
import UserReducer from './UserReducer.jsx';

import SideBarReducer from './SideBarReducer.jsx';


export default combineReducers({
    authReducer: AuthReducer,
    homeReducer: HomeReducer,
    topBarReducer: TopBarReducer,
    bodyReducer: BodyReducer,
    projectReducer: ProjectReducer,
    taskReducer: TaskReducer,
    commentReducer: CommentReducer,
    sideBarReducer: SideBarReducer,
    userReducer: UserReducer,

});