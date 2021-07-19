import React from "react";
import PostsList from "./PostsList";
import Navbar from "./Navbar";
import styles from "../style/home.module.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.hero}>
                <h1 className={styles.hero__title}>YOUR BLOG</h1>
            </div>
            <PostsList />
        </div>
    );
};

export default Home;
