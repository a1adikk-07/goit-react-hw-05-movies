import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { GetMovieById } from 'api/movie';
import style from './search-movie.module.css';

const SingleMovie = () => {
  const [movie, setMovies] = useState();
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await GetMovieById(id);
        setMovies(data);
        const dateObject = new Date(Date.parse(data.release_date));
        setYear(dateObject.getFullYear());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [id]);

  const goBack = () => navigate(from);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <button className={style.button} onClick={goBack} type="button">
        {'\u2190'} Go back
      </button>
      {movie && (
        <>
          <div className={style.mainInfo}>
            <div className={style.imgBlock}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className={style.img}
              />
            </div>
            <div className={style.textBlock}>
              <div>
                <p className={style.mainTitle}>
                  {movie.title} ({year})
                </p>
                <p>
                  <span>User Score:</span>{' '}
                  {(movie.vote_average * 10).toFixed(2)}%
                </p>
              </div>
              <div>
                <p className={style.secondTitle}>Overview</p>
                <p>{movie.overview}</p>
              </div>
              <div>
                <p className={style.secondTitle}>Genres</p>
                <>
                  {movie.poster_path && (
                    <p>
                      <span></span>{' '}
                      {movie.genres.map((genre, index) => (
                        <span key={genre.id}>
                          {genre.name}
                          {index !== movie.genres.length - 1 && ' '}
                        </span>
                      ))}
                    </p>
                  )}
                </>
              </div>
            </div>
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast" state={{ from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from }}>
                Reviews
              </NavLink>
            </li>
            <Suspense> {<Outlet />}</Suspense>
          </ul>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
