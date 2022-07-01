import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { useState } from 'react';
import { AiOutlineArrowUp  } from 'react-icons/ai';
import AnimatedNumbers from "react-animated-numbers";
import './chart.css'
ChartJs.register(
  Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement
)

 const Chart = () => {
  const [num, setNum] = React.useState(9845);


  const style = { color: "#30E0A1" }
  const [data,setData]= useState({
    labels: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
    datasets: [
      {
        label: 'Last Month',
        
        data: [200, 450, 400, 250, 450, 460,500,550,480,150,255,300,500,450,550,350,600,500,550,550],
       
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
     
     
      
        tension:0
      },
      {
        label: 'This Month',
        data: [250, 400, 300, 220, 550, 560,550,450,580,10,355,350,550,400,450,100,50,240,500,520],
        
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
        tension:0
      },
    ]
  })
  return (
   <div className='chart'>
    <div className='chart-header'>
      <div className='row'>
        <div className='col'>
          <h6>Your work summary</h6>
          <h7>Nov - July</h7>
        </div>

        <div className='col mo'>
          
          <div className="form-check form-check-inline rediogroup">
            <div className='radio-1'></div>
            <label className="form-check-label" for="inlineRadio1">Last Month</label>
          </div>
          <div className="form-check form-check-inline rediogroup">
          <div className='radio-2'></div>
            <label class="form-check-label" for="inlineRadio2">This Month</label>
          </div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
              <label class="btn btn-outline-primary" for="btnradio1">Daily</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
              <label className="btn btn-outline-primary" for="btnradio2">Monthly</label>  
          </div>
          
          
        </div>

       
      </div>

      <div className='line' style={{width:'370px', height:'250px' }}>
          <Line data={data}/>
      </div>
      
      <div className='chart-footer'>
      <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 25 }}
        configs={[
          { mass: 1, tension: 1000, friction: 10 },
        
        ]}
      ></AnimatedNumbers>
      

        <button> <AiOutlineArrowUp style={style}/> 829</button>
        <p>Sign-Ups past 30 days</p>
      </div>

    </div>
   </div>
  )
}

export default Chart;