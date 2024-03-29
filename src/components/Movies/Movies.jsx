import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/movie';
import MoviesSearchList from 'components/MoviesSearch/MoviesSearchList/MoviesSearchList';

import styles from './movies.module.css';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setResults(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const elements = results.map(({ id, title }) => (
    <li key={id} className={styles.movie}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>loading...</p>}
      {elements && <MoviesSearchList items={results} />}
    </>
  );
};

export default Movies;
