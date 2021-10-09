import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
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
            <FormControlLabel value="english" control={<Radio />} label="English" />
            <FormControlLabel value="german" control={<Radio />} label="German" />
            <FormControlLabel value="french" control={<Radio />} label="Français" />
            <FormControlLabel value="espanol" control={<Radio />} label="Español" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Select a handicap</FormLabel>
          <RadioGroup row aria-label="handicap" name="row-radio-buttons-group">
            <FormControlLabel value="see" control={<Radio />} label="I am blind" />
            <FormControlLabel value="hear" control={<Radio />} label="I am deaf and dumb" />
            <FormControlLabel value="seehear" control={<Radio />} label="I can neither see nor hear" />
            <FormControlLabel value="nothing" control={<Radio />} label="None of these" />
          </RadioGroup>
        </FormControl>

        <Link href="/game" color="secondary">
          Zum Spiel
        </Link>

        <ProTip />
        <Copyright />

      </Box>

    </Container>
  );
}
