import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom'

function SidebarComp() {

  return (
    <div style={{ display: "flex", height: "100vh", paddingTop:"5%"}}>
     <Sidebar className="app" breakPoint='xs' >
       <Menu >
         <MenuItem className="menu1">
           <h2>QUICKPAY</h2>

         </MenuItem>
         <MenuItem
         component={<Link to="Category"></Link>}>EXPLORE</MenuItem>
         <MenuItem> STAY </MenuItem>
         <SubMenu label="ALPINT">
         <MenuItem
         component={<Link to="Alpine"></Link>} >ALPINE SKIING </MenuItem>
         <MenuItem> NORDIC SKIING </MenuItem>
       </SubMenu>
       <SubMenu label="HOSPITALITY">
         <MenuItem> RESTURANTS</MenuItem>
         <MenuItem> SLOPE RESTURANTS </MenuItem>
       </SubMenu>
       <SubMenu label="ADRENALINE">
         <MenuItem> SCOOTER </MenuItem>
         <MenuItem> ICE CLIMBING </MenuItem>
       </SubMenu>
         <MenuItem> PRICING </MenuItem>
         <MenuItem> CALENDER </MenuItem>
         <MenuItem> ABOUT DESTINATION</MenuItem>
       </Menu>
     </Sidebar>
   </div>
  )
}

export default SidebarComp
