import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import AuthorHeader from "./AuthorHeader";
import { Link } from "react-router-dom";

const PostsList = ({ fetchPosts, posts }) => {
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        return posts.map(post => {
            return (
                <Link to={`/post/${post.id}`} key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <AuthorHeader userId={post.userId} />
                </Link>
            );
        });
    };

    return <div>{renderPosts()}</div>;
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
