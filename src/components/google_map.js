import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() { // lifecycle method that gets called after the component has been rendered on the screen
    new google.maps.Map(this.refs.map, { // how you create an embedded google map in the document, this.refs.map is reference to the HTML node
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    // ref attribute in React gives the reference to an HTML element that's been
    // rendered on the page.
    // After the component has been rendered on the screen I can get a direct
    // reference to the div it's referring to.
    return <div ref="map" />
  }
}

export default GoogleMap;
