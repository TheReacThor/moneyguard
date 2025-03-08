import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TransactionList from "../TransactionList/TransactionList";
import Balance from "../Balance/Balance";
import { getTransactions } from "../../redux/Transactions/operations";
import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";
import useMedia from "../../hooks/useMedia";
import styles from "./HomeTab.module.css";

const HomeTab = () => {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMedia();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
        <Balance />
        {isDesktop && <Currency />}
      </div>
      <TransactionList />
    </div>
  );
};

export default HomeTab;
