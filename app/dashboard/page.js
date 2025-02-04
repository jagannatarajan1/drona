import React from "react";
import styles from "./dashboard.module.css";
import Dashboard from './page';

const Dashboard = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.dashboardContainer}>Dashboard</div>
    </div>
  );
};

export default Dashboard;
