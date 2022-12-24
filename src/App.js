import './App.css';
import Map from './Map';
import AreaOverlay from './AreaOverlay';

import AREAS from './Areas'

const areaCoordinates = AREAS.TEST;

function App() {

  const areaOverlays = [
    <AreaOverlay
      areaCoordinates={areaCoordinates}
    />
  ]

  return (
    <div className="App">
      <Map
        areaOverlays={areaOverlays}
      />
    </div>
  )
}

export default App;
