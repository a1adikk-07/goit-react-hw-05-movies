import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>Trending today</div>
      <Movies />
    </div>
  );
};

export default HomePage;
