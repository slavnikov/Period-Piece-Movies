import React from 'react';

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

    map.addListener('click', (e) => {
      this.props.setLatLng(e.latLng.lat(), e.latLng.lng());
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
