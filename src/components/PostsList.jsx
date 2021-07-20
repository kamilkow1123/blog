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
                    <div className={styles.postlist__cover}>
                        <img
                            src={`https://picsum.photos/750/300?random=${post.id}`}
                        />
                    </div>
                    <div className={styles.postlist__content}>
                        <div>
                            <div className={styles.postlist__title}>
                                {post.title}
                            </div>
                            <div className={styles.postlist__author}>
                                <AuthorHeader userId={post.userId} />
                            </div>
                        </div>
                        <div className={styles.postlist__wrapper}>
                            <Link
                                className={styles.postlist__link}
                                to={`/post/${post.id}`}
                            >
                                read more
                            </Link>
                        </div>
                    </div>
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
