export const searchByName = (query) => {
  return (
    $.ajax({
      method: 'get',
      url: '/search/by_name',
      data: {
        query: query
      }
    })
  );
};
