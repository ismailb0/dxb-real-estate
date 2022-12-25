import { Polygon } from '@react-google-maps/api';

function AreaOverlay(props) {
  return <Polygon paths={props.areaCoordinates} />
}

export default AreaOverlay;
