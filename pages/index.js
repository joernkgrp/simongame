import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Simon Game
        </Typography>

        <FormControl component="fieldset">
          <FormLabel component="legend">Select a language</FormLabel>
          <RadioGroup row aria-label="language" name="row-radio-buttons-group">
            <FormControlLabel value="english" control={<Radio />} label="🇺🇸 English" />
            <FormControlLabel value="german" control={<Radio />} label="🇩🇪 German" />
            <FormControlLabel value="french" control={<Radio />} label="🇫🇷 Français" />
            <FormControlLabel value="espanol" control={<Radio />} label="🇪🇸 Español" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Select a handicap</FormLabel>
          <RadioGroup row aria-label="handicap" name="row-radio-buttons-group">
            <FormControlLabel value="see" control={<Radio />} label="I can’t see" />
            <FormControlLabel value="hear" control={<Radio />} label="I can’t hear" />
            <FormControlLabel value="seehear" control={<Radio />} label="I can neither see nor hear" />
            <FormControlLabel value="nothing" control={<Radio />} label="I have no handicap" />
          </RadioGroup>
        </FormControl>

        <Stack spacing={2} direction="row">
          <Button variant="contained" href="/game" >Start</Button>
          <Button variant="outlined">I need help</Button>
          <Button variant="outlined" href="/grid">See grid</Button>
        </Stack>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
