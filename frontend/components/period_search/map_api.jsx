import React from 'react';
let map;

class MapApi extends React.Component {
  constructor(props) {
    super(props);
    this.currMarkers = [];
  }

  componentDidMount() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 35, lng: 5},
      zoom: 2
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

  clearMarkers() {
    for (let marker of this.currMarkers) {
      marker.setMap(null);
    }
    this.currMarkers = [];
  }

  drawMarkers() {
    this.clearMarkers();

    this.props.markers.forEach((marker) => {
      if (marker.lat && marker.lng) {
        marker = new google.maps.Marker({
          position: {lat: marker.lat, lng: marker.lng},
          map: map,
          title: marker.title,
          url: `#/movie/${marker.id}`
        });
        this.currMarkers.push(marker);
        google.maps.event.addListener(marker, 'click', function() {
          window.location.href = this.url;
        });
      }
    });


    if (this.props.markers.length === 1 && this.currMarkers[0]) {
      map.setZoom(5);
      map.panTo(this.currMarkers[0].position);
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
