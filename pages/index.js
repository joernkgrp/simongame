import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Copyright from '../src/Copyright';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Index() {
  const [language, setLanguage] = React.useState(0);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container maxWidth="m">
      <Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccessibilityNewIcon />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hey, you!
        </Typography>
        <FormControl sx={{ my: 2 }} fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            value={language}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value={0} selected={true}>🇺🇸 English</MenuItem>
            <MenuItem value={1}>🇩🇪 Deutsch</MenuItem>
            <MenuItem value={2}>🇫🇷 Français</MenuItem>
            <MenuItem value={3}>🇪🇸 Español</MenuItem>
          </Select>
          <FormHelperText>Please select a language.</FormHelperText>
        </FormControl>
        <Button
          startIcon={<PlayArrowIcon />}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          href="/form"
        >
          Start Game
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
