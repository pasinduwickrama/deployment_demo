
import './location.css'
import logo6 from '../../img/Group 70.svg';

import React, { useEffect, useState } from 'react';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { AiOutlineArrowUp ,AiOutlineArrowDown } from 'react-icons/ai';
  

const Location =() => {
    const [percentage, setPercentage] = useState(0);
    

        },
    ]
  return (
    <div>
        <div className='location'>
            <div className='header-location'>
            <h2>Visits by Location</h2>
            <button>See All</button>
            </div>

            <div className='flog'>
                <div className='row'>
                    <div className='col'>
                        {flg.map((flg) => (
                            <div key={flg.id}>
                                <div className='list-flg'>
                                    <samp className='sa1'><img src={flg.flg} width="40" /></samp>
                                    <samp className='sa2'>{flg.name}</samp>
                                    <samp className='sa3'>{flg.number}</samp>
                                    <samp className='sa4'>{flg.arroy}</samp>
                                    <samp className='sa5'>{flg.amount}</samp>
                                </div>
                            </div>
                        ))}
                    </div>
                    div className='col'>
                        {flg.map((flg) => (
                            <div key={flg.id}>
                                <div className='list-flg'>
                                    <samp className='sa1'><img src={flg.flg} width="40" /></samp>
                                    <samp className='sa2'>{flg.name}</samp>
                                    <samp className='sa3'>{flg.number}</samp>
                                    <samp className='sa4'>{flg.arroy}</samp>
                                    <samp className='sa5'>{flg.amount}</samp>
                                </div>
                            </div>
                            div className='col'>
                            {flg.map((flg) => (
                                <div key={flg.id}>
                                    <div className='list-flg'>
                                        <samp className='sa1'><img src={flg.flg} width="40" /></samp>
                                        <samp className='sa2'>{flg.name}</samp>
                                        <samp className='sa3'>{flg.number}</samp>
                                        <samp className='sa4'>{flg.arroy}</samp>
                                        <samp className='sa5'>{flg.amount}</samp>
                                    </div>
                                </div>
                                div className='col'>
                                {flg.map((flg) => (
                                    <div key={flg.id}>
                                        <div className='list-flg'>
                                            <samp className='sa1'><img src={flg.flg} width="40" /></samp>
                                            <samp className='sa2'>{flg.name}</samp>
                                            <samp className='sa3'>{flg.number}</samp>
                                            <samp className='sa4'>{flg.arroy}</samp>
                                            <samp className='sa5'>{flg.amount}</samp>
                                        </div>
                                    </div>
                                    
                </div>
            </div>
            <div className='l-ba'></div>

            <div className='visa'>
                <div className='visa-heade'>
                    <h4>Your cards</h4>
                    <button>See All</button>
                </div>
                <div >
                    <div className='car'>
                        <img src={logo6} className='bb' />
                        
                    </div>
                </div>
            </div>

            <div className='rate'>
                <div className='rate-header'>
                    <h2>Satisfaction rate</h2>
                </div>

                <div className='footer-bar'>
                
                <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                circleRatio={0.5}
                styles={{
                  
                  root: {},
                 
                  path: {
                    
                    stroke: `#246CF9`,
                   
                    strokeLinecap: 'butt',
                   
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    
                    transform: 'rotate(0.750turn)',
                    transformOrigin: 'center center',
                  },
                
                  trail: {
                    
                    stroke: '#d6d6d6',
                   
                    strokeLinecap: 'butt',
                 
                    transform: 'rotate(0.750turn)',
                    transformOrigin: 'center center',
                  },
               
                  text: {
                   
                    fill: '#FFFFFF',
                   
                    fontSize: '20px',
                    
                  },
                
                 background: {
                    fill: '#3e98c7',
                  },
                }}
              />
              
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Location;