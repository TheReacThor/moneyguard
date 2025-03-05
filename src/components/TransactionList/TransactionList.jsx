import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openAddModal } from '../../redux/Modals/slice';
import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionList.module.css';
import { ThreeDots } from 'react-loader-spinner';
import { selectTransactions, selectTransLoading } from '../../redux/Transactions/selectors';
import { setToken } from "../../services/auth-api";

const TransactionList = () => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);
  // Using selectors to access state
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectTransLoading);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  const dispatch = useDispatch();

  if (!transactions || transactions.length === 0) {
    return (
      <div className={styles.emptyTransactionsContainer}>
        <p className={styles.noTransactions}>No transactions available yet.</p>
        <p className={styles.addFirstTransaction}>Let's add your first transaction:</p>
        <button 
          className={styles.addTransactionButton}
          onClick={() => dispatch(openAddModal())}
        >
          ADD TRANSACTION
        </button>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Date</div>
        <div className={styles.headerCell}>Type</div>
        <div className={styles.headerCell}>Category</div>
        <div className={styles.headerCell}>Comment</div>
        <div className={styles.headerCell}>Sum</div>
        <div className={styles.headerCell}></div>
      </div>
      <ul className={styles.transactionList}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
