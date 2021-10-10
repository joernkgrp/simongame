import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Index() {
  return (
    <Container maxWidth="false">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simon Game
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome! This game is accessible for everyone.
        </Typography>
        <FormControl sx={{ my: 2 }} component="fieldset">
          <FormLabel component="legend">Please select a language</FormLabel>
          <RadioGroup row aria-label="language" name="row-radio-buttons-group">
            <FormControlLabel value="english" control={<Radio />} label="🇺🇸 English" />
            <FormControlLabel value="german" control={<Radio />} label="🇩🇪 Deutsch" />
            <FormControlLabel value="french" control={<Radio />} label="🇫🇷 Français" />
            <FormControlLabel value="espanol" control={<Radio />} label="🇪🇸 Español" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ my: 2 }} component="fieldset">
          <FormLabel component="legend">Please select a handicap</FormLabel>
          <RadioGroup row aria-label="handicap" name="row-radio-buttons-group">
            <FormControlLabel value="see" control={<Radio />} label="I can’t see" />
            <FormControlLabel value="hear" control={<Radio />} label="I can’t hear" />
            <FormControlLabel value="seehear" control={<Radio />} label="I can neither see nor hear" />
            <FormControlLabel value="nothing" control={<Radio />} label="I have no handicap" />
          </RadioGroup>
        </FormControl>
        <Stack sx={{ my: 2 }} spacing={2} direction="row">
          <Button variant="contained" href="/game" >Start</Button>
          <Button variant="outlined">I need help</Button>
          <Button variant="text" href="/grid">See grid</Button>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
