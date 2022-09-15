import React, { useEffect, useState } from "react";
import axios from "axios";

import { Box, Card, Typography,  Divider } from "@mui/material";
import { Container } from "@mui/system";

import { Avatar } from "@mui/material";
import ButtonAppBar from "./AppBar";

import NewQuoteBtn from "./NewQuoteBtn";
import Footer from "./Footer";

import "../assets/fontfamily.css";
import ReactionButton from "./ReactionButton";

const Font = "'Fondamento', cursive";

// images links of pilosphers

const Epictetus =
  "https://fourteenlinesblog.files.wordpress.com/2018/09/epiciteus.jpg?w=660";

const Marcus =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgif6UI8ZDTAZzqz-_LzE8Dmx3zn2LrHpjgntVg6XJcU7p1O9XPycleHY6wN02rQsilw&usqp=CAU";

const Seneca = "https://miro.medium.com/max/1180/1*MwSpbm9U7TQhpyJS8VnT9w.jpeg";

// images links of pilosphers

const randomStoicQuoteUrl = "https://stoic-server.herokuapp.com/random";

export default function QuoteCard() {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    axios.get(randomStoicQuoteUrl).then((response) => {
      console.log(response.data);
      setRandomQuote(response.data);
    });
  }, []);

  if (!randomQuote) return null;

  //assiging values to variables so it can be copied on click with copy to clipboard button

  let Quote = randomQuote[0].body;
  let QuoteAuthor = randomQuote[0].author;
  let Quotesource = randomQuote[0].quotesource;

  // assiging values to variables so it can be copied on click with copy to clipboard button

  // assigning images to author aoutes
  let author = randomQuote[0].author;

  if (author === "Epictetus") {
    author = Epictetus;
  }
  if (author === "Marcus Aurelius") {
    author = Marcus;
  }
  if (author === "Seneca") {
    author = Seneca;
  }
  // assigning images to author qoutes

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Box mt={15}>
          <Card elevation={5} sx={{ maxWidth: 600 }}>
            <Typography
              sx={{
                fontFamily: Font,
                margin: "0.5rem",
                padding: "2rem",
                border: "2px red",
              }}
            >
              <Box sx={{ fontWeight: "700", fontSize: "1.5rem" }}>
                {randomQuote[0].body}
              </Box>

              <Avatar
                alt="Quote Author"
                src={author}
                sx={{
                  float: "left",
                  display: "block",
                  verticalAlign: "middle",
                  margin: "1.5rem 1rem 0 0",
                  width: 56,
                  height: 56,
                }}
              />
              <Box
                sx={{
                  fontWeight: "700",
                  margin: "1.5rem 0 0 ",
                }}
              >
                {randomQuote[0].author}
              </Box>

              <Box
                sx={{
                  fontWeight: "400",
                }}
              >
                {randomQuote[0].quotesource}
              </Box>
            </Typography>
            <Divider variant="middle" />
            <ReactionButton
              Quote={Quote}
              QuoteAuthor={QuoteAuthor}
              Quotesource={Quotesource}
            />
          </Card>
        </Box>
       
          <Box
            sx={{
              margin: "4rem auto ",
              display: "flex",
              justifyContent: "center",
            }}
           
          >
           <NewQuoteBtn/>
          </Box>
      
      </Container>
      <Footer/>
    </div>
  );
}
