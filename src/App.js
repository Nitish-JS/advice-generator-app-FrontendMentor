import "./App.css";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PatternDivider from "./images/pattern-divider-desktop.svg";
import PatternDividerMobile from "./images/pattern-divider-mobile.svg";
import Dice from "./images/icon-dice.svg";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    handleClick();
  }, []);
  const handleClick = async () => {
    await axios.get("https://api.adviceslip.com/advice").then((response) => {
      setData(() => response.data);
      // console.log(data);
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: "hsl(218, 23%, 16%)",
      }}
    >
      <Box
        className="container"
        sx={{
          background: "hsl(217, 19%, 38%)",
          margin: "0 10%",
          width: "500px",
          borderRadius: "10px",
          p: "3%",
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", color: "hsl(150, 100%, 66%)" }}
        >
          ADVICE #{data?.slip.id}
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "hsl(193, 38%, 86%)", p: "5%" ,fontWeight:"bold"}}
        >
          "{data?.slip.advice}."
        </Typography>

        <picture>
          <source media="(min-width:768px)" srcSet={PatternDivider} />
          <img src={PatternDividerMobile} alt="patterndivide" />
        </picture>

        <div className="button-click">
          <button onClick={handleClick}>
            <img src={Dice}></img>
          </button>
        </div>
      </Box>
    </Box>
  );
}

export default App;
