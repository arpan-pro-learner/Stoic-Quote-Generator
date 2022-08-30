import React from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import CardActions from "@mui/material/CardActions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";

import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "../assets/ButtonStyles.css";

export default function ReactionButton(props) {
  const CopyQuote = props.Quote;
  const CopyQuoteAuthour = props.QuoteAuthor;
  const CopyQuoteSource = props.Quotesource;
  const CopyContent = `Quote: ${CopyQuote}  
Author: ${CopyQuoteAuthour}
Source: ${CopyQuoteSource}  
Quote from a project made by Arpan(twitter: @webdev_arpan)`;

  

/*Below creating a notify carble and assinging the toast meassge to it */ 
 const notify = () => toast.success((<p style={{ fontFamily: 'serif' }}>Quote copied</p>), {
      position: "top-center",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      icon: "✍",
      className: 'toastmessage',
    
      }); 
/*above creating a notify carble and assinging the toast meassge to it */ 


  const copyToClipboard = () => navigator.clipboard.writeText(CopyContent);

  function multipleTask() {
    notify();
    copyToClipboard();
  }

  return (
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "1rem 0 1rem",
        padding: "0.5rem 0",
      }}
    >
      <Tooltip title="Like it">
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorderSharpIcon fontSize="medium" />}
              checkedIcon={<Favorite fontSize="medium" />}
              name="checkedH"
            />
          }
        />
      </Tooltip>
      <IconButton>
        <Tooltip title="Copy Quote">
          <ContentCopyIcon fontSize="medium" onClick={multipleTask} />
        </Tooltip>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </IconButton>
    </CardActions>
  );
}


