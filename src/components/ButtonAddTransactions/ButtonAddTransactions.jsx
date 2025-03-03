import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./ButtonAddTransactions.module.css";
// import { useDispatch } from 'react-redux'; // Sonra eklenecek

const ButtonAddTransactions = () => {
  //const dispatch = useDispatch(); // Sonra eklenecek
  const handleClick = () => {
    //dispatch(setAddTransaction(true))
    console.log("Add Transaction button clicked");
    // Modal açılacak (sonraki task'lerde)
  };

  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={handleClick} type="button">
        <IoAdd className={styles.icon} />
      </button>
    </div>
  );
};

export default ButtonAddTransactions;
