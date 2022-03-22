import React from 'react';
import Team from './TeamData';
import Cards from './Cards';

const SoftwareTeam = () => {


  return (
    
      
      <Cards
        key={Team[0].id}
        imgs={Team[0].imgs}
        name={Team[0].name}
        position={Team[0].position}
        details={Team[0].details}
            
      />



 );
 

}

export default SoftwareTeam;
