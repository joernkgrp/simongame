import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function RowAndColumnSpacing() {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              href="/"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simon Game
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: '100%', p: 2, }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                height: 250,
                minWidth: 100,
                minheight: 100,
                borderRadius: 4,
                mx: "auto",
                bgcolor: '#d32f2f',
                '&:hover': {
                  backgroundColor: '#9a0007',
                  opacity: [1, 1, 1],
                },
              }}
              onClick={handleClick('Red')}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                height: 250,
                minWidth: 100,
                minheight: 100,
                borderRadius: 4,
                mx: "auto",
                bgcolor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#004ba0',
                  opacity: [1, 1, 1],
                },
              }}
              onClick={handleClick('Blue')}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                height: 250,
                minWidth: 100,
                minheight: 100,
                borderRadius: 4,
                mx: "auto",
                bgcolor: '#388e3c',
                '&:hover': {
                  backgroundColor: '#00600f',
                  opacity: [1, 1, 1],
                },
              }}
              onClick={handleClick('Green')}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                height: 250,
                minWidth: 100,
                minheight: 100,
                borderRadius: 4,
                mx: "auto",
                bgcolor: '#fbc02d',
                '&:hover': {
                  backgroundColor: '#c49000',
                  opacity: [1, 1, 1],
                },
              }}
              onClick={handleClick('Yellow')}
            />
          </Grid>
        </Grid>
        <Snackbar
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          message={messageInfo ? messageInfo.message : undefined}
          action={
            <React.Fragment>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        />
      </Box>
    </Container>
  );
}
