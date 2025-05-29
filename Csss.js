import React from 'react'
import logo from './logo.svg';
import './card.css'

export const Csss = () => {
    return (
        <div>
            <div className='card'>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <img src={logo} alt='react' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia iure illum vero?</p>
                    <button>45 RS.</button>
                </div>
            </div>
        </div>
    )
}
