import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const getClasses = (isActive) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navigation}>
      <NavLink to="/home" className={({ isActive }) => getClasses(isActive)}>
        <div className={styles.linkIcon}>
          <MdHome className={styles.homeIcon} />
        </div>
        <span className={styles.linkText}>Home</span>
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) => getClasses(isActive)}
      >
        <div className={styles.linkIcon}>
          <BiStats className={styles.graphicIcon} />
        </div>
        <span className={styles.linkText}>Statistics</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
