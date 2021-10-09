import * as React from 'react';
import { styled } from '@mui/material/styles';
import { display } from '@mui/system';
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
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ backgroundColor: "red" }}>
              <Typography variant="h1" component="div">
                Rot
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ backgroundColor: "blue" }}>
              <Typography variant="h1" component="div">
                Blau
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ backgroundColor: "green" }}>
              <Typography variant="h1" component="div">
                Grün
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ backgroundColor: "yellow" }}>
              <Typography variant="h1" component="div">
                Gelb
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box component="div" sx={{ visibility: 'hidden' }}>
        Visibility Hidden
      </Box>
      <Button variant="contained" component={Link} href="/">
        Zurück
      </Button>
    </Box>
  );
}
