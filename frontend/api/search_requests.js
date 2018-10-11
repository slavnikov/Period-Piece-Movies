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

export const searchByDateRange = (startDate, endDate) => {
  return (
    $.ajax({
      method: 'get',
      url: '/search/by_date_range',
      data: {
        startDate: startDate,
        endDate: endDate,
      }
    })
  );
};
