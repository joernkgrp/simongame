import * as React from 'react';
import { styled } from '@mui/material/styles';
import { display } from '@mui/system';
import { spacing } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', borderRadius: '50%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: 300,
              height: 300,
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
              width: 300,
              height: 300,
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
              width: 300,
              height: 300,
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
              width: 300,
              height: 300,
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
      <Box sx={{ mx: "auto", width: 200 }}>
        <Link href="/" color="secondary">
          Zurück
        </Link>
      </Box>
    </Box>
  );
}
