import React from 'react';
import Team from './TeamData';
import Cards from './Cards';

const FrontEndDev = () => {


  return (
    
      
      <Cards
        key={Team[1].id}
        imgs={Team[1].imgs}
        name={Team[1].name}
        position={Team[1].position}
        details={Team[1].details}
            
      />



 );
 

}

export default FrontEndDev;
