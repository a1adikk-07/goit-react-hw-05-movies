import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Movies from './Movies/Movies';
import Cast from './Cast/Cast';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesSearchPage = lazy(() =>
  import('../pages/MovieSearchPage/MovieSearchPage.jsx')
);
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMoviePage/SingleMoviePage')
);

const CastPage = lazy(() => import('../pages/CastPage/CastPage.jsx'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage.jsx'));
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />{' '}
      </Routes>
    </>
  );
};

export default AppRoutes;
