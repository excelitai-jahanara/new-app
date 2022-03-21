import React from 'react';
import './index.css';
import Cards from './Cards';
import Team from './TeamData';


const eng = 'front end developer';


const Soft = () => {
 

 if (eng === "software engineer") {
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
 else {
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
};


const App = () =>(
  <>
    <div className='team-wrapper'>
       <h1 className='main-header'>Meet Our Team</h1>
      <div className='team-inner'>
        
        {Team.map((val) => {
          {/* return (
            <Cards  
            key={val.id}
            imgs={val.imgs}
            name={val.name}
            position={val.position}
            details={val.details}
            
           />

         ); */}

         <Soft/>
        }
    )}
      </div>
    </div>
  </>

);

export default App;