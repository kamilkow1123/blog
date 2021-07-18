import {
    FETCH_COMMENTS,
    ADD_COMMENT_TO_FAV,
    REMOVE_COMMENT_FROM_FAV,
} from "../actions/types";

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
        case REMOVE_COMMENT_FROM_FAV:
            localStorage.setItem(
                "favouriteComments",
                JSON.stringify(
                    state.favouriteComments.filter(
                        comment => comment.id !== action.payload
                    )
                )
            );
            return {
                ...state,
                favouriteComments : state.favouriteComments.filter(
                    comment => comment.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
