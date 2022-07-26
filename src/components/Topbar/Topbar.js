import React from 'react'
import './topbar.css'
import { HiFolderRemove } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineNightlight } from 'react-icons/md';
import { BsStarHalf,BsSearch } from 'react-icons/bs';
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

import Vector17 from '../../img/Notification@2x.svg'
import Vector18 from '../../img/icons8-полумесяц (1) 1@2x.svg'

export default function Topbar({ changeTheme, currentTheme }) {
  
  const html = document.querySelector("html");
  
  const style = {color:"#246CF9"}
  return (
    <div className='containe' >
       
     <nav className='navbar'>
    
        <div className='header'>
            <h1 className='t1'>Dashboard</h1>
            
        </div>
        <div className='t-bar1'></div>
        
        <div >

        <ul className='folder'>
        <samp><HiFolderRemove size={30} style={style} /></samp>
        <p className='t2'>Adam’s Team</p>
        <p className='dropdown-toggle t3'>Folder</p> 
        </ul> 

        </div>

        <div>
        <form class="d-flex ">
        <input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />
        
      </form>

        </div>
        <div className='t-bar2'></div>
        <ul className='icon'>
            <li ><img src={Vector17} />
            
            
            </li>
            
            <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
             ) : (
              <ImSun className="sun" />
            )}
            </li>

        </ul>
        <div className='t-bar3'></div>
        
        <div>
            <ul className='star'>
                <li><BsStarHalf /></li>
                <li>PREMIUM</li>
            </ul>

        </div>
     </nav>
    </div>
  )
}

<div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}   <div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}   <div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}   <div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}   <div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}   <div >

<ul className='folder'>
<samp><HiFolderRemove size={30} style={style} /></samp>
<p className='t2'>Adam’s Team</p>
<p className='dropdown-toggle t3'>Folder</p> 
</ul> 

</div>

<div>
<form class="d-flex ">
<input class="form-control me-2 f" type="search" placeholder="Search" aria-label="Search"   />

</form>

</div>
<div className='t-bar2'></div>
<ul className='icon'>
    <li ><img src={Vector17} />
    
    
    </li>
    
    <li onClick={changeTheme}>{currentTheme === "dark" ? (<img src={Vector18} />
     ) : (
      <ImSun className="sun" />
    )}
    </li>

</ul>
<div className='t-bar3'></div>

<div>
    <ul className='star'>
        <li><BsStarHalf /></li>
        <li>PREMIUM</li>
    </ul>

</div>
</nav>
</div>
)
}
