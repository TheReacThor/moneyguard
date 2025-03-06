import React from 'react';
import styles from './TransactionItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from '../../redux/Transactions/operations';
import { openEditModal } from '../../redux/Modals/slice';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const { id, transactionDate, type, categoryId, comment, amount } = transaction;

  const handleEditClick = () => {
    dispatch(openEditModal(categoryId));
    console.log('Edit clicked for transaction', transaction);
  };

  const handleDeleteClick = () => {
    dispatch(removeTransaction(id));
    console.log('Delete clicked for transaction:', id);
  };

  // Format amount to display with 2 decimal places and spaces for thousands
  const formattedAmount = Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format date to DD.MM.YY
  const formatDate = (dateString) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(2);
      return `${day}.${month}.${year}`;
    } catch (error) {
      return dateString;
    }
  };

  // Get category name from the categories in Redux store
  const categories = useSelector((state) => state.statistics.categories);

  const getCategoryName = () => {
    if (type === 'INCOME') return 'Income';

    // If categories are available, find the matching category
    if (categories && categories.length > 0) {
      const category = categories.find((cat) => cat.id === categoryId);
      if (category) return category.name;
    }

    // Check against our default categories
    const defaultCategories = [
      { id: 'c9d9e447-1b83-4238-8712-edc77b18b739', name: 'Main expenses' },
      { id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce', name: 'Products' },
      { id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386', name: 'Car' },
      { id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4', name: 'Self care' },
      { id: '76cc875a-3b43-4eae-8fdb-f76633821a34', name: 'Child care' },
      { id: '128673b5-2f9a-46ae-a428-ec48cf1effa1', name: 'Household products' },
      { id: '1272fcc4-d59f-462d-ad33-a85a5e33562b', name: 'Education' },
    ];

    const defaultCategory = defaultCategories.find((cat) => cat.id === categoryId);
    if (defaultCategory) return defaultCategory.name;

    // If no match found, return a formatted version of the ID
    return categoryId ? `Category ${categoryId.substring(0, 8)}...` : 'Unknown';
  };

  return (
    <li
      className={`${styles.transactionItem} ${type === 'EXPENSE' ? styles.expense : styles.income}`}
    >
      <div className={styles.transactionDate}>{formatDate(transactionDate)}</div>
      <div className={styles.transactionType}>{type === 'EXPENSE' ? '-' : '+'}</div>
      <div className={styles.transactionCategory}>{getCategoryName()}</div>
      <div className={styles.transactionComment}>{comment}</div>
      <div className={styles.transactionAmount}>{formattedAmount}</div>
      <div className={styles.transactionActions}>
        <button className={styles.editButton} onClick={handleEditClick}>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.81396 10.2667L1.15729 12.8667L3.75729 12.2L10.9773 4.98L9.02063 3.02L1.81396 10.2667Z'
              stroke='white'
              strokeWidth='1.2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button className={styles.deleteButton} onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
