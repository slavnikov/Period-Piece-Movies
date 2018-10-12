export const fetchMovie = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/movies/${id}`,
    })
  );
};

export const updateMovie = (params) => {
  return (
    $.ajax({
      method: 'patch',
      url: `/api/movies/${params.id}`,
      data: {
        movie: params,
      }
    })
  );
};

export const createMovie = (params) => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/movies',
      data: {
        movie: params,
      }
    })
  );
};
