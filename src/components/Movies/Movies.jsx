import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTreadingMovies } from '../../api/movie';

import styles from './movies.module.css';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getTreadingMovies();
        setResults(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const elements = results.map(({ id, title }) => {
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>;
  });
  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>loading...</p>}
      {Boolean(elements.length) && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default Movies;
