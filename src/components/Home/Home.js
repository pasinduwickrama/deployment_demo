import React, { useState, useEffect } from "react";
import './home.css'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Chart from '../Chart/Chart'
import Balance from '../Balance/Balance'
import Team from '../Team/Team'
import Location from '../Location/Location'

function Home() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className='home'>
      
   

          <div className='topbar-home'>
            <Topbar changeTheme={changeTheme} currentTheme={theme} />
          </div>

          <div className='sidebar-home'>
            <Sidebar />
          </div>

          <div className='chart-home'>
            <Chart />
          </div>

          <div className='balance-home'>
            <Balance />
          </div>
          
          <div className='team-home'>
            <Team />
          </div>

          <div className='loca-home'>
            <Location />
          </div>
          

       
    </div>
  )
}

export default Home