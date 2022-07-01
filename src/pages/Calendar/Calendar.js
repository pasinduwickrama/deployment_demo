
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Big from "./Big/Big";
import Nomal from "./Nomal/Nomal";

import './calendar.css'



function Calendar() {
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
            
            <Big />
          </div>

          <div className='balance-home'>
            
          </div>
          
          <div className='team-home'>
           
          </div>

          <div className='loca-home'>
          <Nomal />
          </div>
          

       
    </div>
  )
}

export default Calendar