export const fetchPeriods = () => {
  return $.ajax({
    method: 'get',
    url: '/api/periods',
  });
};
