import axios from 'axios';

const URL_TREND = 'https://api.themoviedb.org/3/trending/movie/day';
const URL_DETAILS = 'https://api.themoviedb.org/3/movie';
const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

const API_KEY = 'e58a02e4215cc04ce0b4af905ce50db3';

export const getTrendingMovies = () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  });
  return axios.get(`${URL_TREND}?${params}`);
};

export const GetMovieById = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}?${params}`);
};

export const getMovieCastById = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}/credits?${params}`);
};

export const GetSearching = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${URL_DETAILS}/${id}/credits?/${params}`);
};

export const getMovieReviewById = id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return axios.get(`${URL_DETAILS}/${id}/reviews?${params}`);
};

export const searchMovies = query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: false,
    query: query,
  });
  return axios.get(`${URL_SEARCH}?${params}`);
};
