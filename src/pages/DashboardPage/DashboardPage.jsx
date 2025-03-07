import styles from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";
import HomeTab from "../../components/HomeTab/HomeTab";
import ButtonAddTransactions from "../../components/ButtonAddTransactions/ButtonAddTransactions";

const DashboardPage = () => {
  return (
    <div className={styles.dashboardPage}>
      <Header />
      <div className={styles.container}>
        <HomeTab />
        <ButtonAddTransactions />
      </div>
    </div>
  );
};

export default DashboardPage;
