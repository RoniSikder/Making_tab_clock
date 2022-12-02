import { useEffect, useState } from 'react';

function App() {
  let [placeValue, setPlace] = useState({
    x:0,
    y:0
  });
  const position = (e) => {
    let holder= [e.clientX,e.clientY]
    setPlace({x:holder[0],y:holder[1]})
    console.log(placeValue)
  }

  return (
    <div onMouseMoveCapture={(e) => position(e)} className="App">
      <h1>Place of Mouse Pointer</h1>
      {placeValue.x},
      {placeValue.y}
    </div>
  );
}

export default App;
