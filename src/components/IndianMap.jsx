import IndiaMap from 'react-svgmap-india'

const Map = () => {
  return (
    <>
       <IndiaMap size='500px'
                mapColor='white'
                strokeColor='#4f4f4f'
                strokeWidth='1'
                hoverColor='#337037'/>
   </>
  );
};

export default Map;
