import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import { Grid, Typography, List, ListItem } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    padding: '1.2rem',
    backgroundColor: '#263238',
  },
  headingText: {
    color: '#fb4e96',
  },
  link: {
    color: '#44e4ca',
  },
  copyright: {
    backgroundColor: '#263238',
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    padding: '1rem'
  }
}

class Footer extends Component {
  render(){
    return(
      <div style={styles.root}>
        <Grid container>
            <Grid container
              item xs={12} md={6}
              justify="center"
              className="social-icons">
              <Typography variant="title" gutterBottom style={styles.headingText}>
                Connect with us on social media!
              </Typography>
              <Grid item xs={12} className="center">
                <a href="https://www.facebook.com/BitcaveSnackade/" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png"
                alt="facebook"/>
                </a>

                <a href="https://www.instagram.com/bit_cave/" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="instagram"/>
                </a>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={styles.link} className="center">
                <List>
                  <ListItem>
                    <Link className="bitcave-link" to='/merch'>Merchandise</Link>
                  </ListItem>
                  <ListItem>
                    <Link className="bitcave-link" to='/promos'>Promotions</Link>
                  </ListItem>
                  <ListItem>
                    <Link className="bitcave-link" to='/'>Gallery</Link>
                  </ListItem>
                  <ListItem>
                    <Link className="bitcave-link" to='/'>Contact</Link>
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>

          <Grid container justify="center" style={styles.copyright}>
            <Typography variant="body1" color="inherit">
              © 2018 Copyright <span className="green">|</span> www.BitCaveSnackade.com <span className="green">|</span> Developed by <a className="green bitcave-link"
                target="_blank" rel="noopener noreferrer" href="https://vincentguo.net">ProjectVizna</a>
            </Typography>
          </Grid>
      </div>
    )
  }
}

export default Footer;
