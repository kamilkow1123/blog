import { FETCH_COMMENTS, ADD_COMMENT_TO_FAV } from "../actions/types";

const INITIAL_STATE = {
    currentComments   : [],
    favouriteComments : JSON.parse(localStorage.getItem("favouriteComments"))
        ? JSON.parse(localStorage.getItem("favouriteComments"))
        : [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return { ...state, currentComments: action.payload };
        case ADD_COMMENT_TO_FAV:
            localStorage.setItem(
                "favouriteComments",
                JSON.stringify([ ...state.favouriteComments, action.payload ])
            );
            return {
                ...state,
                favouriteComments : [
                    ...state.favouriteComments,
                    action.payload,
                ],
            };
        default:
            return state;
    }
};
