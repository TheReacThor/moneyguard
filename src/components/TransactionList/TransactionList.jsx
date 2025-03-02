import React from 'react';
import { useSelector } from 'react-redux';
import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionList.module.css';
import { ThreeDots } from 'react-loader-spinner';
import { selectTransactions, selectTransLoading } from '../../redux/Transactions/selectors';

const TransactionList = () => {
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

  if (!transactions || transactions.length === 0) {
    return <p className={styles.noTransactions}>Henüz işlem yok.</p>;
  }

  return (
    <ul className={styles.transactionList}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;
