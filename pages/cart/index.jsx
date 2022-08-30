import React from "react";
import { css} from '@emotion/css'
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import  {BsFillCartFill,BsFillCartDashFill}  from "react-icons/bs";
import {  useSelector,useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import Button from "../Components/Button"
import { increment,decrement } from '../../Slices/counterSlice'


import Header from "../Header";

function Cart() {
    const ids = useSelector((state) => state.ids)
    const router = useRouter()
    let price = 0
    const dispatch = useDispatch()
   
    
    const items = useSelector((state)=>state.posts)
    const filtered = items.filter(item => ids.includes(item.id));
    
    items.forEach((item) => {
      
      ids.forEach((it)=>{if(it==item.id){price+=item.Price} })
    });
  
    
    
    
    return(
        <div>
        <div 
    className={css`
     
      text-align:center;font-family: 'Courgette', cursive;font-size:20px;
font-family: 'Edu VIC WA NT Beginner', cursive;
      
    `}
  >   <Header/>

    
    <div>{filtered.map((item)=> <div>
        <div className={css`
        
         float: left;
         text-align:center;
         width: 20%;
         margin-bottom: 16px;
         padding: 0 8px;
      }
    `}>
    <div className={css`
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         margin: 8px;
      }
    `}>
      <img className={css`
           display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
      }
      }
    `}
      alt='monster'
      src={`https://robohash.org/${item.name}`}
    />
      <div className={css`
         padding: 0 16px;
      }
    `}>
        <Typography variant="h5">{item.name}</Typography>
        
        <Typography variant="paragraph">Price : {item.Price}</Typography>
        
        <Typography variant="paragraph"><Button><Link  href={`/Product/${item.name}`}>Product Details</Link> </Button></Typography>
        <Typography variant="paragraph"><Button onClick={() => dispatch(increment(item.id))}>[{ids.filter(x => x==item.id).length}] Add <BsFillCartFill/> </Button> </Typography>
        <Typography variant="paragraph"><Button onClick={() => dispatch(decrement(item.id))}>[{ids.filter(x => x==item.id).length}] Remove <BsFillCartDashFill/> </Button> </Typography>
      </div>
    </div>
  </div></div> )}</div>
      
  <div className={css`
     
     
     
     
     
   `}>Total Price To Pay:{price} <div className={css`
         margin:2px;
      }
    `}><Button><a href="/Pay" onClick={(e)=>{e.preventDefault();router.push("/Pay")}}>Pay The Money</a></Button></div> </div>
          
        </div>
        </div>
      

 
        
        
        
    )
}
export default Cart
