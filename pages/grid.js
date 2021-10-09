import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.object,
};

export default function Gap() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          borderRadius: 8,
        }}
      >
        <Box
            sx={{
              width: '100%',
              height: 250,
              minWidth: 100,
              minheight: 100,
              borderRadius: 8,
              mx: "auto",
              bgcolor: 'blue',
              '&:hover': {
                backgroundColor: 'blue',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        <Box
            sx={{
              width: '100%',
              height: 250,
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
        <Box
            sx={{
              width: '100%',
              height: 250,
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
        <Box
            sx={{
              width: '100%',
              height: 250,
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
      </Box>
    </div>
  );
}
