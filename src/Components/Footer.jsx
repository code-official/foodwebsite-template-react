import React from 'react'
import icon from '../images/logo1.png'
import loaction from '../images/location.png'
import mail from '../images/mail.png'


function Footer() {
    return (
        <div className='footer container'>
            <div className=' container row footer-main'>
                <div className='col-md-5'>
                    <img src={icon} />
                    <p className='lh-1 text-light pt-4'>This is a long paragraph written to show how the line-height of an
                        element is affected by our utilities. Classes are applied to the element itself or
                        sometimes the parent element. These classes
                        can be customized as needed with our utility API.</p>
                </div>
                <div className='col-md-3'></div>
                <div className='col-md-4 pt-4'>
                    <h5 className='location text-light'><img src={loaction} /> 15 NOIDA ,DELHI INDIA</h5>
                    <h5 className='maily text-light'><img  src={mail} /> INFO@COMPANY.COM</h5>
                </div>
            </div>

        </div>
    )
}

export default Footer
