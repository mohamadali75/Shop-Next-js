import React from "react";
import { css} from '@emotion/css'

import Typography from '@mui/material/Typography';
import Header from "../Header";
import Button from "../Components/Button";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";

function Contact() {
    return(
        <div 
    className={css`
     
      text-align:center;font-family: 'Courgette', cursive;
font-family: 'Edu VIC WA NT Beginner', cursive;
      
    `}
  >  <div> <Header/>
  
    
    
      
        
          
            <Typography variant="h5">Lets Talk</Typography>
            <form>
              <div >
                <div>
                  <label>Name *</label>
                  <Input type="text" placeholder="Your name"/>
                </div>
                <div>
                  <label>Email *</label>
                  <Input type="email"   placeholder="Your email"/>
                </div>
              </div>

              <div>
                <div >
                  <label>Subject</label>
                  <Input type="text" placeholder="Your subject"/>
                </div>
              </div>

              <div >
                <div >
                  <label>Message *</label>
                  <TextArea  placeholder="Write your message" />
                </div>
              </div>
              <div >
                <div >
                  <Button >Send Message</Button>
                  <span  />
                </div>
              </div>
            </form>

            <div/> 
            <div >
              Your message was sent, thank you!
            </div>

          </div>
        </div>
      

 
        
        
        
    )
}
export default Contact
