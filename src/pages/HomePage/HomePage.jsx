import styles from './home-page.module.css';
import Movies from 'components/Movies/Movies';

const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>Trending today</div>
      <Movies />
    </div>
  );
};

export default HomePage;
