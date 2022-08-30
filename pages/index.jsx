import Head from 'next/head'
import React from 'react'
import { css} from '@emotion/css'
import Link from 'next/link'



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div 
    className={css`
      color : #FF00FF;
      background-color: #90EE90;
      text-align:center;
      margin:350px 400px;
      height:100px;
      border-radius: 10px;
      &:hover {
        color: white;
      }
    `}
  >   <Link href="/Store">
          <div  
    className={css`
      cursor:pointer;
      font-size:50px;
      padding-top:15px;
      }
    `}> Visit The Store!</div>
        </Link> </div>
      </main>

      
    </div>
  )
}


