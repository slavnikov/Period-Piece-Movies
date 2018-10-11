export const fetchMovie = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/movies/${id}`,
    })
  );
};
