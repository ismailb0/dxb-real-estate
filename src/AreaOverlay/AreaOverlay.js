import { Polygon } from '@react-google-maps/api';

function AreaOverlay(props) {

  const defaultOptions = {
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      strokeColor: '#FF0000',
      strokeOpacity: 0.1,
      strokeWeight: 8
  };

  return <Polygon
            paths={props.areaCoordinates}
            options={defaultOptions}
          />
}

export default AreaOverlay;
