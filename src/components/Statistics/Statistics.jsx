import Chart from '../ChartDoughnut/ChartDoughnut';
import StatisticsDashboard from '../StatisticsSelector/StatisticsSelector';
import StatisticsTable from './StatisticsTable';
import styles from './Statistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.container}>
      <StatisticsDashboard />
      <Chart />
      <StatisticsTable />
    </div>
  );
};

export default Statistics;
