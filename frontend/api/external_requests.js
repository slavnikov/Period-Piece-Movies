export const fetchLocation = (lat, lng) => {
  return $.ajax({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=country&key=${process.env.REACT_APP_GGC_API_KEY}`
  });
};

export const fetchDatabaseBackup = () => {
  return $.ajax({
    method: 'get',
    url: '/api/movie/backup',
  });
};
