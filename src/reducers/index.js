import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    posts       : postsReducer,
    currentPost : postReducer,
    users       : usersReducer,
});
