import * as MovieAPI from '../api/movie_requests';

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const fetchMovie = (id) => {
  return (dispatch) => {
    MovieAPI.fetchMovie(id).then((movie) => {
      dispatch(receiveMovie(movie));
    });
  };
};

export const updateMovie = (params) => {
  return (dispatch) => {
    MovieAPI.updateMovie(params).then((movie) => {
      dispatch(receiveMovie(movie));
    });
  };
};

export const createMovie = (params) => {
  return (dispatch) => {
    MovieAPI.createMovie(params).then((movie) => {
      dispatch(receiveMovie(movie));
    });
  };
};

export const receiveMovie = (movie) => {
  return ({
    type: RECEIVE_MOVIE,
    movie: movie,
  });
};
