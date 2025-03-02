import styles from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Dashboard</h1>
        {/* Additional components will be added in future tasks */}
      </div>
    </>
  );
};

export default DashboardPage;
