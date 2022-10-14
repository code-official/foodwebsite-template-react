import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProCard from './ProCard';
import piimage1 from '../images/s1.png';
import piimage2 from '../images/s2.png';

function MultiPro() {
  
  return (
    <div id='products'>
      <h1>CHOOSE & ENJOY</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, magnam delectus.</p>
      <div className='a-container'>
        <ProCard image={piimage2} title="LOREM IPSUM" />
        <ProCard image={piimage2} title='LOREM IPSUM' />
        <ProCard image={piimage2} title='LOREM IPSUM' />
      </div>
    </div>
  )
}

export default MultiPro
