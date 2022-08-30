import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material";



function TextArea({placeholder}) {
    const theme=useTheme()
    return(
        <textarea cols="30" rows="4" className={css`
        border: solid ${theme.palette.primary.border};
        
   }
   }
 `}  placeholder={placeholder}/>
    )
}
export default TextArea
