import React from 'react'
import './HeadNav.css';
import img1 from '../images/hero.png'
import img2 from '../images/multipro2.jpeg'

function HeadNav() {
    return (
        <div className='threepic container'>

            <div className='row'>
                <div className='col-md-5 i1'>
                    <img className='img1 img-fluid' src={img1} />

                </div>
                <div className='col-lg-2'>
                    
                    <p className='p-dis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A 
                        voluptatum maxime ducimus eos. Unde eaque dicta praesentium, qui illo expedita 
                        excepturi explicabo mollitia provident, rem voluptas iste nostrum aspernatur dolore?</p>
                </div>
                <div className='col-md-5 i2'>
                    <img className='img1 pb-4' src={img2} />
                    {/* <br/>
                    <br/> */}
                    <img className='img1 ' src={img2} />
                </div>
            </div>
            <hr/>


        </div>
    )
}

export default HeadNav;
