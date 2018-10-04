import React, { Component, Fragment } from 'react';
import { Grid, Typography, List, Paper, ListItem, ListItemText } from '@material-ui/core';

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
  }
}

class Footer extends Component {
  render(){
    return(
      <div style={styles.root}>
        <Grid container>
            <Grid item xs>
              <Typography variant="title" gutterBottom style={styles.headingText}>
                Connect with us on social media!
              </Typography>
              <Grid container>
                <Grid item xs>
                  Facebook
                </Grid>
                <Grid item xs>
                  Twitter
                </Grid>
                <Grid item xs>
                  Instagram
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={styles.link}>
                <List>
                  <ListItem>
                    Link1
                  </ListItem>
                  <ListItem>
                    Link2
                  </ListItem>
                  <ListItem>
                    Link3
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default Footer;
