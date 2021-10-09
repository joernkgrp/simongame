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
        <Link href="/" color="secondary">
          Zurück
        </Link>
      </Box>
    </Box>
  );
}
