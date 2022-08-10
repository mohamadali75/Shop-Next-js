import React from "react";
import { css} from '@emotion/css'
import Link from 'next/link'

function Header() {
    return(
        <div className={css`
     
        text-align:center;
        background-color:#5F9EA0;
        height:40px;
        
      `}> <div className={css`
     
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
     
   `}> <Link  href="/Contact">Contact</Link>  </div></div>
    )
}
export default Header
