import { FETCH_POSTS, FETCH_POST, ADD_POST_TO_FAV } from "../actions/types";

const INITIAL_STATE = {
    listOfPosts    : [],
    currentPost    : null,
    favouritePosts : [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, listOfPosts: action.payload };
        case FETCH_POST:
            return { ...state, currentPost: action.payload };
        case ADD_POST_TO_FAV:
            return {
                ...state,
                favouritePosts : [ ...state.favouritePosts, action.payload ],
            };
        default:
            return state;
    }
};
