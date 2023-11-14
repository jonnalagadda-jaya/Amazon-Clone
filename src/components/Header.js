import React, { useEffect, useRef, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getAuth, signOut } from "firebase/auth";
import SearchIcon from "@mui/icons-material/Search";
import amazonLogo from "../assets/amazonLogo.png"
import { allItems } from '../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { userSignOut } from '../redux/amazonSlice';


const Header=()=>{
  const auth = getAuth();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [showAll,setShowAll]=useState(false)

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        showAll && setShowAll(false);
      }
    })
  },[ref,showAll]);

const handleLogout=()=>{
  signOut(auth)
  .then(() => {
    console.log("Sign Out Successfully")
    dispatch(userSignOut())
  }).
  catch((error) => {
    console.log("Error")
  });
}

    return(
        <div className='w-full sticky top-0 z-50'>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
          {/* ============ Image Start here ================== */}
          <Link to='/'>
           <div className="headerHover">
            <img className="w-24 mt-2 p-3" src={amazonLogo} alt="logo"/>
           </div>
           </Link>
          {/* ============ Image End here ================== */}
          {/* ============ Deliver Start here ================== */}
          <div className="headerHover">
            <LocationOnIcon /> 
        <p className='text-sm' text-lightText font-light flex flex-col>
          Hello 
          <span className='text-sm font-semibold -mt-1 text-whiteText'>
            Select your address</span>
         </p> 
          </div>
         {/* ============ Deliver Start here ================== */}
         {/* ============ Search Start here ================== */}

          <div className='h-10 rounded-md flex flex-grow relative'>  
          <span 
          onClick={()=>setShowAll(!showAll)} 
          className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center 
          rounded-tl-md rounded-bl-md'>
            All<span></span><ArrowDropDownOutlinedIcon/>
            </span>
            {showAll &&(
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scrool 
                overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
                flex-col gap-1 z-50'>
                  {/* <li className='text-sm tracking-wide font-titleFont border-b-[1px]
                  border-btransparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                    All Departments</li> */}
                  {
                    allItems.map((item)=>(
                      <li key={item._id}>{item.title}</li>
                    ))
                  }
                  
                </ul>
              </div>
            )}
          <input 
          className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
          type="text"
          />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] 
          duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
          <SearchIcon />
          </span>
          </div>

          {/* ============ Search Start here ================== */}

          {/* ============ Signin Start here ================== */}
          <Link to="/Signin">
          <div className='flex flex-col items-start justify-center headerHover'>
            {
              userInfo?(
                <p>
                  {" "}
                  <p className='text-sm text-gray-100 font-medium'>{userInfo.userName}</p>
                </p>
              ):( 
                <p className='text-xs text-lightText font-light'>Hello, sign in </p>
              )}
            <p className='hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText'>
              Account & Lists {" "}
              <span><ArrowDropDownOutlinedIcon /></span>
              </p>
          </div>
          </Link>
          {/* ============ Signin Start here ================== */}
          {/* ============ Orders Start here ================== */}
            <div className='flex flex-col items-start justify-center headerHover'>
              <p className='text-xs text-lightText font-light'>Returns</p>
              <p className='text-sm font-semibold -mt-1 text-whiteText'>& Oders</p>
            </div>
          {/* ============ Orders Start here ================== */}
         {/* ============ Cart Start here ================== */}
         <Link to="/cart">
          <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartIcon />
            <p className='text-xs font-semibold mt-3 text-whiteText'>
              Cart{" "} 
              <span className='absolute text-xs top-1 left-6 font-semibold p-1 h-4
              bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>
                {products.length >0 ?products.length:0}
                </span>
                </p>
          </div>
          </Link>
          {
            userInfo && (
                <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
                    <LogoutIcon />
                    <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>Log out</p>
                </div>
            )
        }
         {/* ============ Cart Start here ================== */}
        </div>
        <HeaderBottom />
        </div>
    )
}
export default Header;