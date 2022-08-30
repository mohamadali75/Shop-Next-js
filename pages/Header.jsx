import React, { useEffect } from "react";
import { css} from '@emotion/css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector,useDispatch} from 'react-redux'
import {  getCookie ,deleteCookie} from 'cookies-next';
import {LogOut,setPass} from "../Slices/counterSlice"




function Header() {
    
   
    const count = useSelector((state) => state.value)
    const router = useRouter()
    const name = useSelector((state) => state.name)
    const dispatch = useDispatch()
    const user=getCookie('user', )
    dispatch(setPass(user))
    
   
    
   
    
    return(
        <div className={css`
     
        text-align:center;
        background-color:#5F9EA0;
        height:40px;
        
      `}>{name? `hi    ${name}`:"hi"}{name && <div className={css`
     
     border-style: solid;
  border-color: black;margin:5px;padding:2px;display: inline;font-size:20px;
     
   `}> <button onClick={()=>{deleteCookie("user");;window.location.reload()}}>SignOut</button>  </div>}{!name&&<div className={css`
     
     border-style: solid;
  border-color: black;margin:5px;padding:2px;display: inline;font-size:20px;
     
   `}> <Link  href="/LoginPage">Login</Link>  </div>}<div className={css`
     
     border-style: solid;
  border-color: black;margin:5px;padding:2px;display: inline;font-size:20px;
     
   `}><Link   href="/Store">Store</Link></div>
          <div className={css`
     
      border-style: solid;display: inline;font-size:20px;
  border-color: black;margin:5px;padding:2px;
     
   `}><Link  href="/About">About</Link></div>
          <div className={css`
     
     border-style: solid;
  border-color: black;margin:5px;padding:2px;display: inline;font-size:20px;
     
   `}> <Link  href="/Contact">Contact</Link>  </div>
    <div className={css`
     
     border-style: solid;display: inline;font-size:20px;
 border-color: black;margin:5px;padding:2px;
    
  `}>  <a href="/cart" onClick={(e)=>{e.preventDefault();router.push("/cart")}}>
      Added To Cart [{count}] 
    </a> </div><div className={css`
     
     border-style: solid;display: inline;font-size:20px;
 border-color: black;margin:5px;padding:2px;
    
  `}><Link  href="/News">News</Link></div></div>
    )
}
export default Header
