import React from "react";
import { css} from '@emotion/css'
import Link from 'next/link'

function Card() {
    const items=[{name:"Mammad",price:20},{name:"Ali",price:30},{name:"Mostafa",price:100},{name:"Sobhan",price:70},{name:"Naser",price:90},{name:"Reza",price:50},{name:"Khalil",price:10},{name:"Hooman",price:150},{name:"Hojjat",price:120}]
    return(
        <div>{items.map((item)=> <div>
        <div className={css`
         float: left;
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
        <h2>{item.name}</h2>
        
        <p>Price : {item.price}</p>
        
        <p><button type ="button" className={css`
           border: none;
           margin-bottom:10px;
            outline: 0;
            display: inline-block;
            padding: 8px;
             color: white;
             background-color: #000;
             text-align: center;
            cursor: pointer;
            width: 100%;
            height:100%;
            &:hover {
                  color: #555;
      }
      }
    `}><Link  href={`/Product/${item.name}`}>Product Details</Link> </button></p>
      </div>
    </div>
  </div></div> )}</div>
    )
}

export default Card
