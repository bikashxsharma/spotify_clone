 import React from 'react'

 import './style.css'
 
 function SideBarOption({title,Icon}) {
   return (
     <div className="sideBarOption">
       {Icon && <div className="sideBarOption__icon"><Icon/></div>}
      {Icon ? (<h4>{title} </h4>):(<p>{title} </p>)}      
     </div>
   )
 }
 
 export default SideBarOption