import React from "react";
import { css} from '@emotion/css'
import Typography from '@mui/material/Typography';
import Header from "../Header";

function About() {
    return(
        <div 
    className={css`
     
      text-align:center;font-family: 'Courgette', cursive;
font-family: 'Edu VIC WA NT Beginner', cursive;
      
    `}
  >  <div > <Header/> </div>
        <div className={css`
     
     font-size:25px;
     
   `}> About Our Store</div>
        <Typography variant="h4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus praesentium inventore magnam quisquam accusantium doloribus modi exercitationem placeat! Amet itaque consequatur pariatur nulla quam. Quidem suscipit modi, totam voluptas nemo veritatis sunt veniam aut esse earum libero voluptates. Consequuntur minima soluta aliquid vitae at a nostrum quaerat non facilis!</Typography>
        
        </div>
    )
}
export default About
