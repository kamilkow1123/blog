import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import AuthorHeader from "./AuthorHeader";
import {
    removePostFromFav,
    removeCommentFromFav,
    fetchFavPost,
    fetchFavComment,
} from "../actions";

const Favourtites = ({
    fetchFavPost,
    fetchFavComment,
    favPosts,
    favComments,
    favPostsIds,
    favCommentsIds,
    removePostFromFav,
    removeCommentFromFav,
}) => {
    useEffect(
        () => {
            for (const postId of favPostsIds) {
                if (favPosts.some(post => post.id === postId)) {
                    continue;
                }
                fetchFavPost(postId);
            }

            for (const commentId of favCommentsIds) {
                if (favComments.some(comment => comment.id === commentId)) {
                    continue;
                }
                fetchFavComment(commentId);
            }
        },
        [ favPostsIds, favCommentsIds ]
    );

    const renderFavPosts = () => {
        return favPosts.map(post => {
            return (
                <div key={post.id} style={{ border: "1px solid blue" }}>
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        {/* <p>{post.body}</p> */}
                        <AuthorHeader userId={post.userId} />
                    </Link>
                    <button
                        type="button"
                        onClick={() => handleRemovingPost(post.id)}
                    >
                        Remove from favourites
                    </button>
                </div>
            );
        });
    };

    const renderFavComments = () => {
        return favComments.map(comment => {
            return (
                <div key={comment.id} style={{ border: "1px solid red" }}>
                    <Link to={`/post/${comment.postId}`}>
                        <h3>{comment.name}</h3>
                        <h4>by {comment.email}</h4>
                        <p>{comment.body}</p>
                    </Link>
                    <button
                        type="button"
                        onClick={() => handleRemovingComment(comment.id)}
                    >
                        Remove from favourites
                    </button>
                </div>
            );
        });
    };

    const handleRemovingComment = commentId => {
        removeCommentFromFav(commentId);
    };

    const handleRemovingPost = postId => {
        removePostFromFav(postId);
    };

    return (
        <div>
            <Navbar />
            <h1>Favourites</h1>
            <h2>Posts</h2>
            {renderFavPosts()}
            <h2>Comments</h2>
            {renderFavComments()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        favPostsIds    : state.posts.favouritePostsIds,
        favCommentsIds : state.comments.favouriteCommentsIds,
        favPosts       : state.posts.favouritePosts,
        favComments    : state.comments.favouriteComments,
    };
};

export default connect(mapStateToProps, {
    removePostFromFav,
    removeCommentFromFav,
    fetchFavPost,
    fetchFavComment,
})(Favourtites);
