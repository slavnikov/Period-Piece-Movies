import React from 'react';
let map;

class MapApi extends React.Component {
  constructor(props) {
    super(props);
    this.marker = null;
  }

  componentDidMount() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 3
    });

    map.addListener('click', this.handleMapClick.bind(this));
  }

  handleMapClick(e) {
    if (this.props.setLatLng && !this.props.readOnly) {
      this.props.setLatLng(e.latLng.lat(), e.latLng.lng());
    } else {
      return null;
    }
  }

  drawMarkers() {
    this.props.markers.forEach((marker) => {
      if (marker.lat && marker.lng) {
        if (this.marker) {this.marker.setMap(null);}
        this.marker = new google.maps.Marker({
          position: {lat: marker.lat, lng: marker.lng},
          map: map,
          title: marker.title,
        });
      }
    });
  }

  render () {
    this.drawMarkers();
    return (
      <span
        id='map'
        className='glass-border'>
      </span>
    );
  }
}

export default MapApi;
