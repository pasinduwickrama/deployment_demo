
import './location.css'
import logo6 from '../../img/Group 70.svg';

import React, { useEffect, useState } from 'react';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { AiOutlineArrowUp ,AiOutlineArrowDown } from 'react-icons/ai';
  

const Location =() => {
    const [percentage, setPercentage] = useState(0);
    

    useEffect(() => {
      setTimeout(() => {
        if (percentage <  76) {
          setPercentage(percentage + 1);
        }
      }, 50);
    }, [percentage])


    const style = { color: "#30E0A1" }
    const style1 = {color: "#FA2256"}
    const flg =[
        {
            id:1,
            flg:'https://flagcdn.com/us.svg',
            name:'USA',
            number:'1,438',
            amount:'5.8%',
            arroy:(
                <AiOutlineArrowUp style={style} />
            ),
        },
        {
            id:2,
            flg:'https://flagcdn.com/ca.svg',
            name:'Canada',
            number:'1928',
            amount:'51.2%',
            arroy:(
                <AiOutlineArrowDown style={style1} />
            ),
        },
        {
            id:3,
            flg:'https://flagcdn.com/de.svg',
            name:'Germany',
            number:'674',
            amount:'17.1%',
            arroy:(
                <AiOutlineArrowUp style={style}/>
            ),
        },
        {
            id:4,
            flg:'https://flagcdn.com/mx.svg',
            name:'Mexico',
            number:'258',
            amount:'15.8%',
            arroy:(
                <AiOutlineArrowDown style={style1}/>
            ),
        },
        {
            id:5,
            flg:'https://flagcdn.com/fr.svg',
            name:'France',
            number:'90',
            amount:'9.8%',
            arroy:(
                <AiOutlineArrowUp style={style}
                />
            ),
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