import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', p: 2,}}>
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
      <Box component="div" sx={{ visibility: 'hidden' }}>
        Visibility Hidden
      </Box>
      <Stack spacing={2} direction="row">
          <Button variant="contained" href="/" >Go back</Button>
          <Button variant="outlined">I need help</Button>
        </Stack>
    </Box>
  );
}
