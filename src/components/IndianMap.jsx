import { useState } from 'react';
import IndiaMap from 'react-svgmap-india'

const Map = () => {
  const [state, setState] = useState('')
  // CSS style to change the color of Uttar Pradesh and Haryana to blue
  const mapStyle = `
    #UP, #HR {
      fill: #0e83bb !important; /* Blue color */
      stroke: #4f4f4f;
      stroke-width: 1;
    }
    #UP:hover, #HR:hover {
      fill: #f8a130 !important; /* Hover color */
    }
  `;
  return (
    <>
    <style>{mapStyle}</style>
       <IndiaMap onClick={(s) => setState(s)} size='500px'
                mapColor='#cddffc'
                strokeColor='#4f4f4f'
                strokeWidth='1'
                hoverColor='#b6ffba'
                className='m-auto'
                
                />
   </>
  );
};

export default Map;
