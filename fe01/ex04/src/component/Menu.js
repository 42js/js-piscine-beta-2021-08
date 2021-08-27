import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  decoration: {
    textDecoration: 'none',
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><Link to="/" className={classes.decoration}><h2>Go Home</h2></Link></MenuItem>
          <MenuItem><Link to="/1" className={classes.decoration}><Button variant="contained" color="primary">Content1</Button></Link></MenuItem>
          <MenuItem><Link to="/2" className={classes.decoration}><Button variant="contained" color="secondary">Content2</Button></Link></MenuItem>
          <MenuItem><Link to="/3" className={classes.decoration}><Button variant="contained">Content3</Button></Link></MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}