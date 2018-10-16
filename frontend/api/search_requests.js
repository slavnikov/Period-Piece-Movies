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

export const searchByDateRange = (startYear, endYear) => {
  return (
    $.ajax({
      method: 'get',
      url: '/search/by_date_range',
      data: {
        startYear: startYear,
        endYear: endYear,
      }
    })
  );
};
