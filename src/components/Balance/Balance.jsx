import { useSelector } from "react-redux";
import styles from "./Balance.module.css";
import { formatter } from "../../helpers/formatBalance";

const Balance = () => {
  const balance = useSelector((state) => state.auth.user?.balance) || 0;

  // Format balance with just thousands separators, no decimal part
  const formattedBalance = formatter.format(balance);

  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.balanceTitle}>YOUR BALANCE</p>
      <p className={styles.balanceAmount}>
        <span className={styles.currencySymbol}>₴</span> {formattedBalance}
      </p>
    </div>
  );
};

export default Balance;
