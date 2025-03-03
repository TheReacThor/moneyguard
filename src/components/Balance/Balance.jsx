import { useSelector } from "react-redux";
import styles from "./Balance.module.css";

const Balance = () => {
  const balance = useSelector((state) => state.auth.user?.balance) || 0;

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.balanceTitle}>YOUR BALANCE</p>
      <p className={styles.balanceAmount}>
        <span className={styles.currencySymbol}>₴</span> {balance.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
