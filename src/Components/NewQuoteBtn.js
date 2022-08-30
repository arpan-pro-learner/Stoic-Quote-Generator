import { Button } from "@mui/material";
import React from "react";
import "../assets/ButtonStyles.css";

import "../assets/fontfamily.css";

const Font = "'Fondamento', cursive";
  
export default function NewQuoteBtn() {


  return (
    <div>
      <Button sx={{
        fontFamily: Font,
        background: "#fff",
        padding: "0.6em 1.3em",
        fontweight: "700",
        fontsize: "20px",
        border: "2px solid black",
        borderradius: "0.1em",
        boxshadow: "0.2em 0.2em",
        color: "#000",
        '&:hover':{
          transform: 'translate(-0.05em, -0.05em)',
          boxshadow: '0.15em 0.15em',
        },
        '&:active':{
          transform: 'translate(0.05em, 0.05em)',
          boxshadow: '0.05em 0.05em',
        }
      }} onClick={() => window.location.reload()}>
        New Quote
      </Button>
    </div>
  );
}
