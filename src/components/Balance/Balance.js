import React, { useEffect, useState } from 'react';

import { FcClock } from "react-icons/fc";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './balance.css'

const Balance =() => {
  

    const [percentage, setPercentage] = useState(0);
    const styles = {color:"#11CABE"}

    useEffect(() => {
      setTimeout(() => {
        if (percentage < 32) {
          setPercentage(percentage + 1);
        }
      }, 50);
    }, [percentage])

    const data = [
        {
            id:1,
            title:'Exchange Balance',
            amount:'0.213435345 ',
            usd:'3,897.98 USD',
            icon:(
                <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                
                styles={{
                  
                  root: {},
                 
                  path: {
                    
                    stroke: `#246CF9`,
                   
                    strokeLinecap: 'butt',
                   
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    
                    transform: 'rotate(0.100turn)',
                    transformOrigin: 'center center',
                  },
                
                  trail: {
                    
                    stroke: '#d6d6d6',
                   
                    strokeLinecap: 'butt',
                 
                    transform: 'rotate(0.100turn)',
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
            )
           
        },
        {
            id:2,
            title:'Exchange Balance',
            amount:'0.213435345',
            usd:'3,897.98 USD',
            icon:(
                <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  
                  root: {},
                 
                  path: {
                    
                    stroke: `#FA2256`,
                   
                    strokeLinecap: 'butt',
                   
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    
                    transform: 'rotate(0.100turn)',
                    transformOrigin: 'center center',
                  },
                
                  trail: {
                    
                    stroke: '#d6d6d6',
                   
                    strokeLinecap: 'butt',
                 
                    transform: 'rotate(0.25turn)',
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
            )
           
        },
        {
            id:3,
            title:'Exchange Balance',
            amount:'0.213435345',
            usd:'3,897.98 USD',
            icon:(
                <CircularProgressbar 
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  
                  root: {},
                 
                  path: {
                    
                    stroke: `#11CABE`,
                   
                    strokeLinecap: 'butt',
                   
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    
                    transform: 'rotate(0.100turn)',
                    transformOrigin: 'center center',
                  },
                
                  trail: {
                    
                    stroke: '#d6d6d6',
                   
                    strokeLinecap: 'butt',
                 
                    transform: 'rotate(0.100turn)',
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
            )
           
           
        },
    ]

    
  return (
    <div className='Balance'>
        {data.map((data) => (
            <div key={data.id}>
                <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>
                </div>

                
            </div>

        ))}
       
    </div>
  );
};
export default Balance;