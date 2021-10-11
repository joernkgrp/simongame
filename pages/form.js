import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Form() {
    const [handicap, setHandicap] = React.useState(3);

    const handleChange = (event) => {
        setHandicap(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
            <Container component="main" maxWidth="m">
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <SettingsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        A few more things
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Your name"
                            name="name"
                            placeholder="John Doe"
                            helperText="Please type in your name."
                            autoFocus
                        />
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Your handicap</InputLabel>
                            <Select
                                value={handicap}
                                label="Your handicap"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>I can’t see</MenuItem>
                                <MenuItem value={1}>I can’t hear</MenuItem>
                                <MenuItem value={2}>I can neither see nor hear</MenuItem>
                                <MenuItem value={3}>I have no handicap</MenuItem>
                            </Select>
                            <FormHelperText>Please select a handicap.</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ mt: 2 }} fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Your input type</InputLabel>
                            <Select
                                value={handicap}
                                label="Your input type"
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>Speak</MenuItem>
                                <MenuItem value={1}>Touch or click</MenuItem>
                                <MenuItem value={2}>Sense</MenuItem>
                                <MenuItem value={3}>All types</MenuItem>
                            </Select>
                            <FormHelperText>Please select an input type.</FormHelperText>
                        </FormControl>
                        <Button
                            startIcon={<PlayArrowIcon />}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 4 }}
                            href="/game"
                        >
                            Start Game
                        </Button>
                        <Button
                            startIcon={<ArrowBackIcon />}
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 2}}
                            href="/"
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
}