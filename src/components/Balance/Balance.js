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
                <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>   <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>   <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>   <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>   <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>   <div className='left'>
                   <ul>
                    <li className='tt1'>{data.title}</li>
                    <li className='tt2'>{data.amount}</li>
                    <li className='tt3'>{data.usd}</li>
                   </ul>
                   <div className='icon'>
                    {data.icon}
                   </div>
                
            </div>

        ))}
       
    </div>
  );
};
export default Balance;