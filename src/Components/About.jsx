import React from 'react';
import aboutig from '../images/hero.png'


function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h4 className='text-dark'>DISCOVER</h4>
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Odio illo suscipit asperiores repellendus itaque porro, 
                    unde saepe voluptate, recusandae autem labore. Impedit asperiores explicabo aperiam 
                </p>


            </div>
            <div className='about-image'>
                <img src={aboutig}></img>

            </div>
        </div>
    )
}

export default About
