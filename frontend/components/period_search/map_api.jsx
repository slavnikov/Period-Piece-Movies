import React from 'react';

const GM_API_KEY = process.env.GM_API_KEY;

class MapApi extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let map;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 3
    });
  }

  render () {
    return (
      <span
        id='map'
        className='glass-border'>
      </span>
    );
  }
}

export default MapApi;
