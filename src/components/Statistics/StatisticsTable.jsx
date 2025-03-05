import React from 'react';
import styles from './StatisticsTable.module.css';

const StatisticsTable = () => {
  // Bu bileşen, seçilen döneme ait işlem kategorilerinin ve toplam tutarlarının listelendiği bir tablo gösterecek
  // Şimdilik placeholder olarak basit bir tablo gösteriyoruz
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>İşlem Kategorileri</h2>
      <table className={styles.statisticsTable}>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Tutar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className={styles.emptyMessage}>
              Henüz veri yok
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
