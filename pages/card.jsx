import React,{useState,useEffect} from "react";
import { css} from '@emotion/css'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import  {BsFillCartPlusFill,BsFillCartDashFill}  from "react-icons/bs";
import {  useDispatch,useSelector } from 'react-redux'

import Button from "./Components/Button"


import { increment,decrement ,setPost} from '../Slices/counterSlice'

export default function Card() {
 
    
    
    const ids = useSelector((state) => state.ids)
    const dispatch = useDispatch()
    const [items,setItems]=useState([])

    
    
    useEffect(() => {
      fetch("https://62f94d8ae056448035354a51.mockapi.io/users")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result)
            
            dispatch(setPost(result))
            

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error)}
        )
    }, [])
   
    
    return(
        <div>{items.map((item)=> (<div>
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
        <Typography variant="paragraph"><Button onClick={() => dispatch(increment(item.id))}>[{ids.filter(x => x==item.id).length}] ADD <BsFillCartPlusFill/> </Button> </Typography>
        <Typography variant="paragraph"><Button onClick={() => dispatch(decrement(item.id))}>[{ids.filter(x => x==item.id).length}] Remove <BsFillCartDashFill/> </Button> </Typography>
      </div>
    </div>
  </div></div>) )}</div>
    )
}




