import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchComments,
    fetchPost,
    addPostToFav,
    addCommentToFav,
} from "../actions";
import AuthorHeader from "./AuthorHeader";
import Navbar from "./Navbar";

const Post = ({
    fetchPost,
    post,
    fetchComments,
    comments,
    addPostToFav,
    addCommentToFav,
}) => {
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
                    <button
                        type="button"
                        onClick={() => toggleCommentFav(comment.id)}
                    >
                        Add to favourite
                    </button>
                    <p>{comment.body}</p>
                </div>
            );
        });
    };

    const togglePostFav = () => {
        addPostToFav(parseInt(id));
    };

    const toggleCommentFav = commentId => {
        addCommentToFav(commentId);
    };

    return !post ? (
        <div>Loading...</div>
    ) : (
        <div>
            <Navbar />
            <h1>{post.title}</h1>
            <AuthorHeader userId={post.userId} />
            <button type="button" onClick={togglePostFav}>
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
        comments : state.comments.currentComments,
    };
};

export default connect(mapStateToProps, {
    fetchPost,
    fetchComments,
    addPostToFav,
    addCommentToFav,
})(Post);
