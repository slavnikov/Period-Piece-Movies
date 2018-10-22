export const login = (user) => {
  return $.ajax({
    method: 'post',
    url: '/session',
    data: {
      user: user
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/session',
  });
};
