import { useSelector, useDispatch } from 'react-redux';

import { selectAreas } from './areaSlice';
import './App.css';
import Map from './Map';
import AreaOverlay from './AreaOverlay';
import AREAS from './Areas'

function App() {

  const areas = useSelector(selectAreas);
  // eslint-disable-next-line
  const dispatch = useDispatch();

  const areaOverlays = areas.map((area) => <AreaOverlay areaCoordinates={AREAS[area]} key={AREAS[area]} />)

  return (
    <div className="App">
      <Map
        areaOverlays={areaOverlays}
      />
    </div>
  )
}

export default App;
