import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import {
    FETCH_POSTS,
    FETCH_POST,
    FETCH_USER,
    FETCH_COMMENTS,
    ADD_POST_TO_FAV,
    ADD_COMMENT_TO_FAV,
} from "./types";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/posts/${id}`);

    dispatch({ type: FETCH_POST, payload: response.data });
};

export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: FETCH_USER, payload: response.data });
});

export const fetchComments = postId => async dispatch => {
    const response = await jsonPlaceholder.get(`/posts/${postId}/comments`);

    dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const addPostToFav = postId => dispatch => {
    dispatch({ type: ADD_POST_TO_FAV, payload: postId });
};

export const addCommentToFav = commentId => dispatch => {
    dispatch({ type: ADD_COMMENT_TO_FAV, payload: commentId });
};
