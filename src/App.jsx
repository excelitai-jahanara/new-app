import React from 'react';
import './index.css';

import SoftwareTeam from './SoftwareTeam';
import FrontEndDev from './FrontEndDev';

const favT = 'Software Engineer';

// const Favs = () => {
  


//   if (favT === 'Software Engineer') {

//    return  <SoftwareTeam/>

// }
// else {
//   return <FrontEndDev/>
// }
// }





const App = () =>(
  <>
    <div className='team-wrapper'>
       <h1 className='main-header'>Meet Our Team</h1>
      <div className='team-inner'>
        
        {(favT === 'Software Engineer') ?  <SoftwareTeam/> :  <FrontEndDev/> }
        {/* <Favs/> */}
        {/* {Team.map((val) => {
          return (
            <Cards  
            key={val.id}
            imgs={val.imgs}
            name={val.name}
            position={val.position}
            details={val.details}
            
           />

         );

   
        }
    )} */}
      </div>
    </div>
  </>

);

export default App;