import React from 'react';
import styles from './TransactionItem.module.css';
// import { useDispatch } from 'react-redux';  // Sonra eklenecek

const TransactionItem = ({ transaction }) => {
  // const dispatch = useDispatch(); // Sonra eklenecek
  const { id, transactionDate, type, categoryId, comment, amount } = transaction;

  const handleEditClick = () => {
    // dispatch(setEditTransaction(transaction))
    console.log('Edit clicked for transaction:', id);
    // Düzenleme modalı açılacak (sonraki task'lerde)
  };

  const handleDeleteClick = () => {
    // dispatch(removeTransaction(id))
    console.log('Delete clicked for transaction:', id);
    // Silme işlemi yapılacak (sonraki task'lerde)
  };

  return (
    <li className={`${styles.transactionItem} ${type === 'expense' ? styles.expense : styles.income}`}>
      <div className={styles.transactionDate}>{transactionDate}</div>
      <div className={styles.transactionType}>{type === 'expense' ? 'Gider' : 'Gelir'}</div>
      <div className={styles.transactionCategory}>{categoryId}</div>
      <div className={styles.transactionComment}>{comment}</div>
      <div className={styles.transactionAmount}>
        {type === 'expense' ? '-' : '+'}
        {amount}
      </div>
      <div className={styles.transactionActions}>
        <button className={styles.editButton} onClick={handleEditClick}>
          <span className="material-symbols-outlined">
            edit
          </span>
        </button>
        <button className={styles.deleteButton} onClick={handleDeleteClick}>
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
