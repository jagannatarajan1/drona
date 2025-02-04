import React from "react";
import Sidebar from "../ui/dashborad/sidebar/sidebar";
import Navbar from "../ui/dashborad/navbar.js/navbar";
import styles from "./dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.Navbar}>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
