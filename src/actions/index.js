import jsonPlaceholder from "../apis/jsonPlaceholder";
import { FETCH_POSTS, FETCH_USER } from "./types";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    // console.log(response.data);

    dispatch({ type: FETCH_USER, payload: response.data });
};
