import React from "react";
import PostsList from "./PostsList";
import Navbar from "./Navbar";
import styles from "../style/home.module.css";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <PostsList />
        </div>
    );
};

export default Home;
