import * as React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Confetti from "react-confetti";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

let defaultLanguage = 0; // English
let startValue = 0;

export default function ContinuousSlider() {
  const [language, setLanguage] = React.useState(defaultLanguage);

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
          <Box
            sx={{
              typography: "h1",
              color: "primary.main",
              textAlign: "center",
              mb: 1,
            }}
          >
            What is your current mood?
          </Box>
          <Box
            sx={{
              typography: "h2",
              textAlign: "center",
            }}
          >
            ¿Cuál es tu estado de ánimo actual?
          </Box>

          <Stack spacing={2} direction="row" sx={{ mt: 4 }} alignItems="center">
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
        {value == "100" && <Confetti gravity={0.5} />}
      </Box>
    </Container>
  );
}
