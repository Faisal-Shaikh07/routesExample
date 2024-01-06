import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  input: {
    padding: '13px',
    outline: 'none',
    borderRadius: '5px',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: 14,
    flex: '0 0 49%',
  },
  selectInput: {
    padding: '13px',
    outline: 'none',
    borderRadius: '5px',
  },
});

const Pm = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', gap: '10px' }}>
        <Box className={classes.inputBox}>
          <Typography variant="p">Project name</Typography>
          <TextField
            type="text"
            placeholder="Enter project name"
            className={classes.input}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Typography variant="p">Project start date</Typography>
          <TextField
            type="date"
            placeholder="Select date"
            className={classes.input}
          />
        </Box>
      </Box>
    </>
  );
};

export default Pm;