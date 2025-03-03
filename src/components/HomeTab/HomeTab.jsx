import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TransactionList from "../TransactionList/TransactionList"; // Sonra oluşturulacak
import Balance from "../Balance/Balance"; // Sonra oluşturulacak
import { fetchTransactions } from "../../redux/Transactions/operations"; // Task 13'ten
import Navigation from "../Navigation/Navigation";
import styles from "./HomeTab.module.css";

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
        <Balance />
      </div>
      <TransactionList />
    </div>
  );
};

export default HomeTab;
