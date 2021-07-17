import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments, fetchPost } from "../actions";
import AuthorHeader from "./AuthorHeader";

const Post = ({ fetchPost, post, fetchComments, comments }) => {
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
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <h4>by {comment.email}</h4>
                    <p>{comment.body}</p>
                </div>
            );
        });
    };

    return !post ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h1>{post.title}</h1>
            <AuthorHeader userId={post.userId} />
            <p>{post.body}</p>
            <h2>Comments</h2>
            {renderComments()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        post     : state.currentPost,
        comments : state.comments,
    };
};

export default connect(mapStateToProps, { fetchPost, fetchComments })(Post);
