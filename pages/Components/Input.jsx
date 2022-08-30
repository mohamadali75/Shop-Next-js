import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material";



function Input({type,placeholder,className}) {
    const theme=useTheme()
    return(
        <input className={css`
        border: solid ${theme.palette.primary.border};
        
   }
   }
 `}  type={type} placeholder={placeholder}/>
    )
}
export default Input
