import React from 'react';
import Header from '../components/header';
import Homebody from '../components/HomeBody';
import Contactanos from '../components/Formcontactanos';
import '../styles/homePage.css'



export default function Home() {
  return (
    <div className='homePag'>
        {/* <Header/> */}
        <Homebody/>
      
    </div>
  )
}
