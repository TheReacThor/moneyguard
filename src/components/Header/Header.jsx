import { useSelector } from "react-redux";
//import { logoutUser } from '../redux/auth/auth-slice'; // Sonra eklenecek
import styles from "./Header.module.css"; //Stil dosyasının import edilmesi
import HeaderLogoSvg from "./HeaderLogoSvg";
import HeaderExitSvg from "./HeaderExitSvg";
import { Link } from "react-router-dom";

const Header = () => {
  //   const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user?.email); // Redux'tan email'i al
  const username = email ? email.split("@")[0] : ""; // @ işaretinden önceki kısmı al

  const handleLogout = () => {
    //  dispatch(logoutUser());
    // Şimdilik konsola yazdır, sonra LogOutModal açılacak
    console.log("Logout clicked");
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
          <button className={styles.logoutButton} onClick={handleLogout}>
            <HeaderExitSvg />
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
