import * as React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Container from "@mui/material/Container";

let startValue = 0;

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxwidth="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "background.paper",
          height: 1000,
          widht: 1000,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Icon icon="noto:frowning-face" height="64" />
            <Slider
              color="secondary"
              aria-label="Mood"
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
            <Icon icon="noto:smiling-face" height="64" />
          </Stack>
        </Box>
        {value == "100" && <Confetti />}
      </Box>
    </Container>
  );
}

export class Confetti extends React.Component {
  getInstance = (instance) => {
    // saving the instance to an internal property
    this.confetti = instance;
  };

  onClickCustom = () => {
    // starting the animation with custom settings
    this.confetti({
      particleCount: Math.ceil(Math.random() * 1000),
      spread: 180,
    });
  };

  render() {
    const style = {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: -1,
    };

    return (
      <>
        <ReactCanvasConfetti
          // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          className={"yourClassName"}
          // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
          refConfetti={this.getInstance}
        />

        <button onClick={this.onClickCustom}>Fire with custom</button>
      </>
    );
  }
}
