import { useSelector, useDispatch } from 'react-redux';

import { selectAreas } from '../AreaOverlay/areaSlice';
import Map from '../Map';
import AreaOverlay from '../AreaOverlay';
import AREAS from '../Constants/Areas'

function MapPage() {

  const areas = useSelector(selectAreas);
  // eslint-disable-next-line
  const dispatch = useDispatch();

  const areaOverlays = areas.map((area) => <AreaOverlay areaCoordinates={AREAS[area]} key={area} />)

  return (
    <div className="MapPage">
      <Map
        areaOverlays={areaOverlays}
      />
    </div>
  )
}

export default MapPage;
