import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material";



function Button({children,onClick}) {
    const theme = useTheme()
    return(
        <button className={css`
        border-radius: 20px;
       
        margin-bottom:10px;
         display: inline-block;
         padding: 8px;
          color: white;
          background-color: ${theme.palette.primary.main};
          text-align: center;
         cursor: pointer;
         &:hover {
               color: #555;
   }
   }
 `} type="button" onClick={onClick}>{children}</button>
    )
}
export default Button
