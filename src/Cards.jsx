import React from 'react';
import Images from './Images';


function Cards(props) {
 return (
  
  <div className='card'>
   <div className='team-images'>
    <Images imgs={props.imgs}/>
   </div>
   <div className='team-info'>
    <h2 className='team-heading'>{props.name} </h2>
    <h6 className='team-heading2'>{props.position}</h6>
    <p className='team-details'>{props.details}</p>

    <div className='social-media'>
     <a href=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " alt=' ' target='_blank' className='facebook'><i class="fa-brands fa-facebook-f"></i> </a>

     <a href=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " alt=' ' target='_blank' className='instagram'><i class="fa-brands fa-instagram"></i></a>

     <a href=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " alt=' ' target='_blank' className='twitter'><i class="fa-brands fa-twitter"></i> </a>

     <a href=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " alt=' ' target='_blank' className='linkdin'><i class="fa-brands fa-linkedin-in"></i> </a>

     <a href=" https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " alt=' ' target='_blank' className='github'><i class="fa-brands fa-github"></i> </a>
    </div>
   </div>
  </div>

 );
};
export default Cards;