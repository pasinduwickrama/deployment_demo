import React from 'react'
import './side.css'

import { Link } from 'react-router-dom'

import Vector from '../../img/Frame 127.svg'
import Vector2 from '../../img/Category.svg'
import Vector3 from '../../img/Frame 128.svg'

import Vector4 from '../../img/Frame 129.svg'


import Vector5 from '../../img/Activity.svg'
import Vector6 from '../../img/Calendar.svg'
import Vector7 from '../../img/Folder.svg'
import Vector8 from '../../img/Buy.svg'

import Vector9 from '../../img/icons8-figma 1.svg'
import Vector10 from '../../img/icons8-slack-new 1.svg'
import Vector11 from '../../img/icons8-jira 1.svg'

import Vector12 from '../../img/Setting.svg'
import Vector13 from '../../img/Logout.svg'

import Vector14 from '../../img/Ellipse 48.svg'
import Vector15 from '../../img/Rectangle 562.svg'

import Vector17 from '../../img/Notification@2x.svg'
import Vector18 from '../../img/icons8-полумесяц (1) 1@2x.svg'


export default function Sidebar() {
  return (
    <div className='containe'>
        <div className='sidenav'>
            <div className='logo-h' >
            <img src={Vector} />
            
            <img className='t' src={Vector3} /> 
            <img src={Vector4} className='e' />
            <img className='p' src={Vector17}  />
            <img className='pp' src={Vector18} />
            
            </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

              
            </div>

            <div className='integr'>
                <div>
                    <h5 className='t5'>INTEGRATIONS</h5>
                </div>

                <div>

                <ul className='bas'>
                    <li><img src={Vector9} /></li>
                    <li>Figma</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector10} /></li>
                    <li>Slack</li>
                    <div className="counter">99+</div>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector11} /></li>
                    <li>Jira</li>
                </ul>



                </div>

            </div>

            <div className='account'>
                <div>
                    <h5 className='t6'>ACCOUNT</h5>
                </div>

                <div>

                <ul className='bas'>
                    <li><img src={Vector12} /></li>
                    <li>Settings</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector13} /></li>
                    <li>Settings</li>
                </ul>

               
                </div>

            </div>

            <div className='footer'>

            </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

                </div>
            <hr className='hr'/>
            
            <div className='nav-item'>
            <Link to="/">
                <div className='butt'>
                <ul className='bas'>
                   
                    <li><img src={Vector2} /></li>
                    <li >Dashboard</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="project">
                <div className='butt'>
                <ul className='bas'>
                
                    <li><img src={Vector5} /></li>
                    <li>Projects</li>
                    
                </ul>
                </div>
                </Link>
                <Link to="Calendar">
                <div className='butt'>
                <ul className='bas'>
                    <li><img src={Vector6} /></li>
                    <li>Calendar</li>
                </ul>
                </div>
                </Link>

                <ul className='bas'>
                    <li><img src={Vector7} /></li>
                    <li>Documents</li>
                </ul>

                <ul className='bas'>
                    <li><img src={Vector8} /></li>
                    <li>Store</li>
                </ul>

              
     
      <div className='row1'>
      
      <div className='col-1 pic'>
      
      <img src={Vector14}  alt="" width='60px' height='60px'/>
        </div>
        <div className='col ap'>
        <h6 className='name' >
        Adam Simpson
      </h6>
      <p className='name1'>Simpson2@mail.com</p>
        </div>
      </div>
     
       
      <img src={Vector14}  alt="" width='60px' height='60px'/>
        </div>
        <div className='col ap'>
        <h6 className='name' >
        Adam Simpson
      </h6>
      <p className='name1'>Simpson2@mail.com</p>
        </div>
      </div>
     
      <img src={Vector14}  alt="" width='60px' height='60px'/>
        </div>
        <div className='col ap'>
        <h6 className='name' >
        Adam Simpson
      </h6>
      <p className='name1'>Simpson2@mail.com</p>
        </div>
      </div>
     
      <img src={Vector14}  alt="" width='60px' height='60px'/>
      </div>
      <div className='col ap'>
      <h6 className='name' >
      Adam Simpson
    </h6>
    <p className='name1'>Simpson2@mail.com</p>
      </div>
    </div>
   
    <img src={Vector14}  alt="" width='60px' height='60px'/>
    </div>
    <div className='col ap'>
    <h6 className='name' >
    Adam Simpson
  </h6>
  <p className='name1'>Simpson2@mail.com</p>
    </div>
  </div>
 
  <img src={Vector14}  alt="" width='60px' height='60px'/>
  </div>
  <div className='col ap'>
  <h6 className='name' >
  Adam Simpson
</h6>
<p className='name1'>Simpson2@mail.com</p>
  </div>
</div>

<img src={Vector14}  alt="" width='60px' height='60px'/>
</div>
<div className='col ap'>
<h6 className='name' >
Adam Simpson
</h6>
<p className='name1'>Simpson2@mail.com</p>
</div>
</div>


     
      
    
  </div>

          


        </div>

    </div>
  )
}
