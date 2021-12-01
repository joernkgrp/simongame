import * as React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Confetti from "react-confetti";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Copyright from "../src/Copyright";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

let defaultLanguage = 0; // English
let startValue = 0;

export default function ContinuousSlider() {
  const [language, setLanguage] = React.useState(defaultLanguage);

  const [value, setValue] = React.useState(startValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Senso
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ mt: 10, mb: 1, bgcolor: "secondary.main" }}>
          <AccessibilityNewIcon />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hey, you!
        </Typography>
        <FormControl sx={{ my: 4 }} fullWidth>
          <InputLabel>Language</InputLabel>
          <Select value={language} label="Language" onChange={handleChange}>
            <MenuItem value={0} selected={true}>
              🇺🇸 English
            </MenuItem>
            <MenuItem value={1} disabled={true}>
              🇩🇪 Deutsch
            </MenuItem>
            <MenuItem value={2} disabled={true}>
              🇩🇪 Leichtes Deutsch
            </MenuItem>
            <MenuItem value={3} disabled={true}>
              🇫🇷 Français
            </MenuItem>
            <MenuItem value={4} disabled={true}>
              🇪🇸 Español
            </MenuItem>
          </Select>
          <FormHelperText>Please select a language.</FormHelperText>
        </FormControl>
        <Button
          endIcon={<ArrowForwardIcon />}
          type="submit"
          fullWidth
          variant="contained"
          href="/form"
        >
          Continue
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
