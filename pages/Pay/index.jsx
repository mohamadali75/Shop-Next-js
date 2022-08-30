import React from "react";
import { css} from '@emotion/css'
import TextArea from "../Components/TextArea"


import Header from "../Header";
import Button from "../Components/Button";

function Contact() {
    
    
    return(
        <div className={css`
     
        text-align:center;font-family: 'Courgette', cursive;font-size:20px;
  font-family: 'Edu VIC WA NT Beginner', cursive;
        
      `}>
        <Header/>
        Thank you! please write your address down below
         <div><TextArea/></div>
         <div><Button>Send</Button></div>
        </div>
      

 
        
        
        
    )
}
export default Contact
