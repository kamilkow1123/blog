import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__wrapper}>
                <Link className={styles.nav__link} to="/">
                    Home
                </Link>
                <Link className={styles.nav__link} to="/favourites">
                    Favourites
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
