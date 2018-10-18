import React from 'react';
let map;

class MapApi extends React.Component {
  constructor(props) {
    super(props);
    this.marker = null;
  }

  componentDidMount() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 35, lng: 5},
      zoom: 3
    });

    map.addListener('click', this.handleMapClick.bind(this));
    this.drawMarkers();
  }

  componentDidUpdate() {
    this.drawMarkers();
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
    if (this.props.markers.length === 1 && this.marker) {
      map.setZoom(5);
      map.panTo(this.marker.position);
    }
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
