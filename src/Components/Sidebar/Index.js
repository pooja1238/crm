import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Index = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/attendence",
            name:"Attendence",
            icon:<FaUserAlt/>
        },
        {
            path:"/lead",
            name:"Lead",
            icon:<FaRegChartBar/>
        },
        {
            path:"/tasks",
            name:"Tasks",
            icon:<FaCommentAlt/>
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<FaShoppingBag/>
        },
        {
            path:"/form",
            name:"Form",
            icon:<FaThList/>
        },
        {
            path:"/order",
            name:"Order",
            icon:<FaShoppingBag/>
        },
        {
            path:"/expenses",
            name:"Expenses",
            icon:<FaShoppingBag/>
        },
        {
            path:"/reminder",
            name:"Reminder",
            icon:<FaShoppingBag/>
        },
        {
            path:"/notes",
            name:"Notes",
            icon:<FaShoppingBag/>
        },
        {
            path:"/chat",
            name:"Chat",
            icon:<FaShoppingBag/>
        },
        {
            path:"/report",
            name:"Report",
            icon:<FaShoppingBag/>
        },
        {
            path:"/setting",
            name:"Settings",
            icon:<FaShoppingBag/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Index;