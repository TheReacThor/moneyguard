import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TransactionList from "../TransactionList/TransactionList"; // Sonra oluşturulacak
import Balance from "../Balance/Balance"; // Sonra oluşturulacak
import ButtonAddTransactions from "../ButtonAddTransactions/ButtonAddTransactions";
import { getTransactions } from "../../redux/Transactions/operations"; // Task 13'ten
import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";
import useMedia from "../../hooks/useMedia";
import styles from "./HomeTab.module.css";

const HomeTab = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useMedia();

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
      <ButtonAddTransactions />
    </div>
  );
};

export default HomeTab;
