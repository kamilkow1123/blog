import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import AuthorHeader from "./AuthorHeader";
import { Link } from "react-router-dom";
import styles from "../style/postlist.module.css";

const PostsList = ({ fetchPosts, posts }) => {
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        return posts.map(post => {
            return (
                <div className={styles.postlist__post} key={post.id}>
                    <Link
                        className={styles.postlist__link}
                        to={`/post/${post.id}`}
                    >
                        {post.title}
                    </Link>
                    <AuthorHeader userId={post.userId} />
                </div>
            );
        });
    };

    return <div className={styles.postlist}>{renderPosts()}</div>;
};

const mapStateToProps = state => {
    return { posts: state.posts.listOfPosts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
