"use client"; // Required for usePathname in Next.js App Router

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { BiPlusMedical } from "react-icons/bi";
import {
  FaUserCog,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeadset,
  FaTasks,
  FaBriefcase,
  FaFolderOpen,
  FaFileAlt,
  FaPlus,
  FaLayerGroup,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current active route

  const sidebarMenu = [
    {
      id: 2,
      name: "Manage User",
      icon: <FaUserCog />,
      link: "/dashboard/manage-user",
    },
    {
      id: 3,
      name: "Academic",
      icon: <FaGraduationCap />,
      link: "/dashboard/academic",
    },
    {
      id: 4,
      name: "Time Table",
      icon: <FaCalendarAlt />,
      link: "/dashboard/time-table",
    },
    {
      id: 5,
      name: "Attendance",
      icon: <FaCheckCircle />,
      link: "/dashboard/attendance",
    },
    {
      id: 6,
      name: "Help Desk",
      icon: <FaHeadset />,
      link: "/dashboard/help-desk",
    },
    { id: 7, name: "Task", icon: <FaTasks />, link: "/dashboard/task" },
    {
      id: 8,
      name: "Placement",
      icon: <FaBriefcase />,
      link: "/dashboard/placement",
    },
    {
      id: 9,
      name: "Directory",
      icon: <FaFolderOpen />,
      link: "/dashboard/directory",
    },
    { id: 10, name: "Exam", icon: <FaFileAlt />, link: "/dashboard/exam" },
  ];

  return (
    <div className={styles.sideMenu}>
      <div className={styles.image}>
        <Link href="/">
          <Image
            src="/header-logo-black.png"
            alt="logo"
            width={200}
            height={30}
          />
        </Link>
      </div>

      <div className={styles.menuall}>
        <div className={styles.overview}>
          <div className={styles.overviewIcon}>
            <FaLayerGroup />
          </div>
          <div className={styles.overviewText}>
            <p>Overview</p>
          </div>
        </div>
        <div className={styles.line}>
          <hr />
        </div>
        <div>
          {sidebarMenu.map((item) => (
            <Link href={item.link} key={item.id} className={styles.link}>
              <div
                className={`${styles.menuitem} ${
                  pathname === item.link ? styles.active : ""
                } ${item.special ? styles.special : ""}`}
              >
                <div className={styles.menuIcon}>{item.icon}</div>
                <div className={styles.menuText}>
                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.addNew}>
        <div className={styles.menuitemLastAdd}>
          <Link href="/dashboard/add-new" className={styles.link}>
            <div className={styles.menuitemLast}>
              <div className={styles.menuIcon}>
                <BiPlusMedical className={styles.fontIcon} />
              </div>
              <div className={styles.menuText}>
                <p>Add New</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
