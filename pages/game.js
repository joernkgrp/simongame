import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RowAndColumnSpacing() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ px: 0}}>
      <Box sx={{ flexGrow: 1,  }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Remember the button
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How to start"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Remember the random button lighting up and reproduce the order by pressing the right button.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ width: '100%', mt: 8, p: 2, }}>
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
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
