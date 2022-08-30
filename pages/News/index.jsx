import React from "react"
import { useQuery, gql } from '@apollo/client';
import ListGroup from 'react-bootstrap/ListGroup';
import { css } from "@emotion/css";
import Header from "../Header"


function  News ()  {
  const news = gql`
query {
  posts {
    data {
      id
      title
      body
    }
  }
}

`;

const {data} =  useQuery(news);  
 

 



// const array = data.posts.data


return(<div><Header/>
<div className={css`
        border-radius: 20px;
       font-size:20px;
          text-align: center;
        
   }
   }
 `}>News List</div> 
<ListGroup>{data.posts.data.map((items)=><ListGroup.Item >{items.title}</ListGroup.Item>)}
</ListGroup>
</div> )
}
export default News
