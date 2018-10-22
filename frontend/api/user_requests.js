export const createUser = (params) => {
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: {
      user: params
    }
  });
};
