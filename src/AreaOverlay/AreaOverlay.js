import React, { Component } from 'react';
import { Polygon } from '@react-google-maps/api';

class AreaOverlay extends Component {

  defaultOptions = {
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 8
  }

  state = { options: this.defaultOptions }

  handleMouseOver = () => {
    this.setState({
      options: {
          fillColor: '#FF0000',
          fillOpacity: 1,
          strokeColor: '#FF0000',
          strokeOpacity: 0.1,
          strokeWeight: 8
      }
    })
  }

  handleMouseOut = () => {
    this.setState({ options: this.defaultOptions })
  }

  render() {
    return (
      <Polygon
        paths={this.props.areaCoordinates}
        options={this.state.options}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      />
    );
  }
}

export default AreaOverlay;
