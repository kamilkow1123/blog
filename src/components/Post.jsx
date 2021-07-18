import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
    fetchComments,
    fetchPost,
    addPostToFav,
    addCommentToFav,
    removePostFromFav,
    removeCommentFromFav,
} from "../actions";
import AuthorHeader from "./AuthorHeader";
import Navbar from "./Navbar";
import styles from "../style/post.module.css";

const Post = ({
    fetchPost,
    post,
    fetchComments,
    comments,
    addPostToFav,
    addCommentToFav,
    favPostsIds,
    favCommentsIds,
    removePostFromFav,
    removeCommentFromFav,
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
                        {favCommentsIds.includes(comment.id) ? (
                            "Remove from favourites"
                        ) : (
                            "Add to favourites"
                        )}
                    </button>
                    <p>{comment.body}</p>
                </div>
            );
        });
    };

    const togglePostFav = () => {
        const postId = parseInt(id);
        if (favPostsIds.includes(postId)) {
            removePostFromFav(postId);
        } else {
            addPostToFav(postId);
        }
    };

    const toggleCommentFav = commentId => {
        if (favCommentsIds.includes(commentId)) {
            removeCommentFromFav(commentId);
        } else {
            addCommentToFav(commentId);
        }
    };

    return !post ? (
        <div>Loading...</div>
    ) : (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.post}>
                    <h1 className={styles.post__title}>{post.title}</h1>
                    <AuthorHeader userId={post.userId} />
                    <button type="button" onClick={togglePostFav}>
                        {favPostsIds.includes(parseInt(id)) ? (
                            "Remove from favourites"
                        ) : (
                            "Add to favourite"
                        )}
                    </button>
                    <p>
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                        {post.body}
                    </p>
                    {parseInt(id) > 1 && (
                        <Link to={`/post/${parseInt(id) - 1}`}>
                            Previous Post
                        </Link>
                    )}
                    {parseInt(id) < 100 && (
                        <Link to={`/post/${parseInt(id) + 1}`}>Next Post</Link>
                    )}
                    <h2>Comments</h2>
                    {renderComments()}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        post           : state.posts.currentPost,
        comments       : state.comments.currentComments,
        favPostsIds    : state.posts.favouritePostsIds,
        favCommentsIds : state.comments.favouriteCommentsIds,
    };
};

export default connect(mapStateToProps, {
    fetchPost,
    fetchComments,
    addPostToFav,
    addCommentToFav,
    removePostFromFav,
    removeCommentFromFav,
})(Post);
