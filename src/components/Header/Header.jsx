import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./Header.module.css";
import HeaderLogoSvg from "./HeaderLogoSvg";
import HeaderExitSvg from "./HeaderExitSvg";
import { Link } from "react-router-dom";
import LogOutModal from "../LogOutModal/LogOutModal.jsx";



const Header = () => {
  const email = useSelector((state) => state.auth.user?.email) || "";
  const username = email.split("@")[0] || "anonymous";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <HeaderLogoSvg />
        Money Guard
      </Link>
      <div className={styles.userInfo}>
        <span className={styles.username}>
          {username ? username : "Hello anonymous"}
        </span>
        <div>
          <button className={styles.logoutButton} onClick={handleLogoutClick}>
            <HeaderExitSvg />
            Exit
          </button>
        </div>
      </div>
      {isModalOpen && <LogOutModal onClose={closeModal} />}
    </header>
  );
};

export default Header;