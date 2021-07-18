import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <Link className={styles.nav__link} to="/">
                Home
            </Link>
            <Link className={styles.nav__link} to="/favourites">
                Favourites
            </Link>
        </div>
    );
};

export default Navbar;
