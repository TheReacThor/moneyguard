import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrencyData } from "../../redux/Currency/selectors";
import { getCurrency } from "../../redux/Currency/operations";
import useMedia from "../../hooks/useMedia";
import styles from "./Currency.module.css";

const Currency = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectCurrencyData);
  const { isDesktop } = useMedia();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const buyUSD = currencyData?.usdRate?.rateBuy.toFixed(2);
  const sellUSD = currencyData?.usdRate?.rateSell.toFixed(2);
  const buyEUR = currencyData?.eurRate?.rateBuy.toFixed(2);
  const sellEUR = currencyData?.eurRate?.rateSell.toFixed(2);

  return (
    <div className={styles.currency_wrapper}>
      <div className={styles.currency_table}>
        <ul className={styles.currency_table_head}>
          <li className={styles.currency_item}>Currency</li>
          <li className={styles.currency_item}>Purchase</li>
          <li className={styles.currency_item}>Sale</li>
        </ul>
        <ul className={styles.table_body}>
          <li className={styles.currency_tr}>
            <p className={styles.currency}>USD</p>
            <p className={styles.currency}>{buyUSD}</p>
            <p className={styles.currency}>{sellUSD}</p>
          </li>
          <li className={styles.currency_tr}>
            <p className={styles.currency}>EUR</p>
            <p className={styles.currency}>{buyEUR}</p>
            <p className={styles.currency}>{sellEUR}</p>
          </li>
        </ul>
      </div>

      {isDesktop ? (
        <div className={styles.diagram}>
          <p className={styles.lowerNumber}>{buyUSD}</p>
          <p className={styles.higherNumber}>{buyEUR}</p>
          <img src="/img/currency.png" alt="Currency chart" />
        </div>
      ) : (
        <img src="/img/currency.png" alt="Currency chart" />
      )}
    </div>
  );
};

export default Currency;
