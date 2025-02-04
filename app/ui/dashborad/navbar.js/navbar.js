import React from "react";
import styles from "./navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import Dropdown from "../dropdown/dropdown";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarFirst}>
        <div className={styles.navbarName}>
          <div>
            <p className={styles.nameFirst}>Hello Priyam!</p>
          </div>
          <div>
            <p className={styles.nameSecond}>Welcome to Skill College</p>
          </div>
        </div>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Search" className={styles.input} />
          <button className={styles.navButton}>
            <BsSearch className={styles.iconSearch} />
          </button>
        </div>
      </div>

      <div className={styles.navbarSecond}>
        <div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.secondNavbarProfile}>
          <div>
            <button className={styles.secondNavbarProfileButton}>
              <TbMessageDots className={styles.profileIcons} />
            </button>
          </div>
          <div>
            <button className={styles.secondNavbarProfileButton}>
              <IoMdNotificationsOutline className={styles.profileIcons} />
            </button>
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
