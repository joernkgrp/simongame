import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', borderRadius: '50%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: 200,
              minWidth: 100,
              minheight: 100,
              mx: "auto",
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: 'red',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: 200,
              minWidth: 100,
              minheight: 100,
              mx: "auto",
              bgcolor: 'blue',
              '&:hover': {
                backgroundColor: 'blue',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: 200,
              minWidth: 100,
              minheight: 100,
              mx: "auto",
              bgcolor: 'green',
              '&:hover': {
                backgroundColor: 'green',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: '100%',
              height: 200,
              minWidth: 100,
              minheight: 100,
              mx: "auto",
              bgcolor: 'yellow',
              '&:hover': {
                backgroundColor: 'yellow',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>
      </Grid>
      <Box component="div" sx={{ visibility: 'hidden' }}>
        Visibility Hidden
      </Box>
      <Box sx={{ mx: "auto" }}>
      <Button variant="contained" href="/" >Go back</Button>
      </Box>
    </Box>
  );
}
