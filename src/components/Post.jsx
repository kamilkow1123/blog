import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../actions";

const Post = ({ fetchPost, post }) => {
    const { id } = useParams();

    useEffect(
        () => {
            if (!post) fetchPost(id);
        },
        [ post ]
    );

    return !post ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return { post: state.currentPost };
};

export default connect(mapStateToProps, { fetchPost })(Post);
