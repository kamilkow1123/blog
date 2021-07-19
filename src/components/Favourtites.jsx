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
import styles from "../style/favourites.module.css";
import ScrollToTop from "../ScrollToTop";

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
                <div key={post.id} className={styles.post}>
                    <h2 className={styles.post__title}>{post.title}</h2>
                    <div className={styles.post__author}>
                        <AuthorHeader userId={post.userId} />
                    </div>
                    <div className={styles.post__buttons}>
                        <div
                            onClick={() => handleRemovingPost(post.id)}
                            className={styles.post__fav}
                        >
                            Remove from favourites
                        </div>
                        <Link
                            to={`/post/${post.id}`}
                            className={styles.post__link}
                        >
                            View the post
                        </Link>
                    </div>
                </div>
            );
        });
    };

    const renderFavComments = () => {
        return favComments.map(comment => {
            return (
                <div key={comment.id} className={styles.comment}>
                    <h3 className={styles.comment__title}>{comment.name}</h3>
                    <h4 className={styles.comment__author}>
                        by {comment.email}
                    </h4>
                    <div className={styles.comment__body}>
                        <p>{comment.body}</p>
                    </div>
                    <div className={styles.comment__buttons}>
                        <div
                            onClick={() => handleRemovingComment(comment.id)}
                            className={styles.comment__fav}
                        >
                            Remove from favourites
                        </div>
                        <Link
                            to={`/post/${comment.postId}`}
                            className={styles.comment__link}
                        >
                            View the post
                        </Link>
                    </div>
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
            <ScrollToTop />
            <Navbar />
            <div className={styles.container}>
                <div className={styles.fav}>
                    <h1 className={styles.fav__title}>Favourites</h1>
                    <h2 className={styles.fav__header}>Posts</h2>
                    <div className={styles.fav__wrapper}>
                        {renderFavPosts()}
                    </div>
                    <h2 className={styles.fav__header}>Comments</h2>
                    {renderFavComments()}
                </div>
            </div>
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
