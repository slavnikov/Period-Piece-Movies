import React from 'react';

const GM_API_KEY = process.env.GM_API_KEY;

class MapApi extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let map;
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 5
    });
  }

  render () {
    return (
      <aside id='map' style={{ width: 500, height: 500 }}>
      </aside>
    );
  }
}

export default MapApi;
