import { useState } from 'react';
import IndiaMap from 'react-svgmap-india'

const Map = () => {
  const [state, setState] = useState('')
  return (
    <>
       <IndiaMap onClick={(s) => setState(s)} size='500px'
                mapColor='#aed8b2'
                strokeColor='#4f4f4f'
                strokeWidth='1'
                hoverColor='#337037'/>
   </>
  );
};

export default Map;
