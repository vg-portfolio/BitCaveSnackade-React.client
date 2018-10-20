import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import  { Link } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: '#fb4e96', //PINK
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  secondaryColor: {
    color: '#44e4ca', //GREEN
  }
};

class Navbar extends Component {
  render(){
    return (
      <div style={styles.root}>
        <AppBar position="static" className="black">
          <Toolbar>
            <Typography variant="display1" color="inherit" style={styles.grow}>
              <Link to='/' style={styles.link}>
              BitCave</Link>
            </Typography>

            <Typography variant="title" className="navlink-hover" color="inherit" style={styles.secondaryColor}>
              <Link to='/promos' className="navlink" style={styles.link}>Promos</Link>
            </Typography>
            <Typography variant="title" className="pink" style={styles.secondaryColor}>
              |
            </Typography>
            <Typography variant="title" className="navlink-hover"  color="inherit" style={styles.secondaryColor}>
              <Link to='/merch' style={styles.link}>Merch</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );

  }
}

export default Navbar;
