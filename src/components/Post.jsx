import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments, fetchPost, addToFav } from "../actions";
import AuthorHeader from "./AuthorHeader";

const Post = ({ fetchPost, post, fetchComments, comments, addToFav }) => {
    const { id } = useParams();

    useEffect(
        () => {
            fetchPost(id);
            fetchComments(id);
        },
        [ id ]
    );

    const renderComments = () => {
        return comments.map(comment => {
            return (
                <div key={comment.id} style={{ border: "1px solid red" }}>
                    <h3>{comment.name}</h3>
                    <h4>by {comment.email}</h4>
                    <p>{comment.body}</p>
                </div>
            );
        });
    };

    const toggleFav = () => {
        addToFav(id);
    };

    return !post ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h1>{post.title}</h1>
            <AuthorHeader userId={post.userId} />
            <button type="button" onClick={toggleFav}>
                Add to favourite
            </button>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {renderComments()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        post     : state.posts.currentPost,
        comments : state.comments,
    };
};

export default connect(mapStateToProps, { fetchPost, fetchComments, addToFav })(
    Post
);