import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostsList = ({ fetchPosts }) => {
    useEffect(() => {
        console.log(fetchPosts());
    }, []);
    return (
        <div>
            <h1>List of posts</h1>
        </div>
    );
};

export default connect(null, { fetchPosts })(PostsList);
