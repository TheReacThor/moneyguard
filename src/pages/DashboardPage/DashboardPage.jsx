import styles from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";
import HomeTab from "../../components/HomeTab/HomeTab";

const DashboardPage = () => {
  return (
    <div className={styles.dashboardPage}>
      <Header />
      <div className={styles.container}>
        <HomeTab />
      </div>
    </div>
  );
};

export default DashboardPage;
