import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myText: {
    color: 'red',
    cursor: 'pointer',
  },
});

const Login = ({ user }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClick = () => {
    const dashboardPath = user ? '/userDashboard' : '/pmDashboard';
    navigate(dashboardPath);
  };

  return (
    <div className={classes.myText} onClick={handleClick}>
      login
    </div>
  );
};

export default Login;
