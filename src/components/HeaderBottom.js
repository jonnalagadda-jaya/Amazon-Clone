import React, { useEffect, useRef, useState } from 'react'
import  MenuIcon from '@mui/icons-material/Menu';
import  Closeicon from '@mui/icons-material/Close';
import  AccountCircleicon from '@mui/icons-material/AccountCircle';
//import { setSidebar } from 'react';
import SideNavContent from './SideNavContent';
import {motion} from "framer-motion"
import { useSelector } from 'react-redux/es/hooks/useSelector';



const HeaderBottom = () => {
  const userInfo = useSelector((state)=>state.amazon.userInfo);
  const ref=useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
    if(e.target.contains(ref.current)){
      setSidebar(false)
    }
    })
      },[])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
    <ul className='flex items-center gap-2 text-sm tracking-wide'>
       <li onClick={()=>setSidebar(true)} className='headerHover' flex items-center gap-1> 
       <MenuIcon />All</li>
       <li className='headerHover'>Today's Deals</li>
       <li className='headerHover'>Customer Service</li>
       <li className='headerHover'>Gift Cards</li>
       <li className='headerHover'>Registry</li>
       <li className='headerHover'>sell</li>
    </ul>
    {sidebar && (
      <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
      <div className="w-full h-full relative">
      <motion.div ref={ref} inital={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className="w-[350px] h-full bg-white border border-black">
        <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
        <AccountCircleicon />
        {
          userInfo ?(
            <h3 className='font-titleFont font-bold text-lg tracking-wide'>
              {userInfo.userName}
            </h3>
          ):(
            <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign in</h3>
          )
        }
        </div>
       <SideNavContent 
       title="Digital Content & Devices"
       one ="Amazon Musics"
       two = "kindle E-readers & Books"
       three = "Amazon Appstore" 
       />
       <SideNavContent 
       title="Shop By Department"
       one ="Electnonics"
       two = "Computers"
       three = "Smart Home" 
       />
       <SideNavContent 
       title="Progrems & Features"
       one =" Gift Cards"
       two = "Amazon live"
       three = "International Shopping" 
       />
       <SideNavContent 
       title="Help & Settings"
       one ="Your Account"
       two = "Customer service"
       three = "Contact Us" 
       />
      </motion.div>
      <span onClick={()=>setSidebar(false)}className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center 
      border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
      <Closeicon />
      </span>
      </div>
      </div>
    ) }
    </div>
  )
}

export default HeaderBottom;