import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

class Location extends Component {
  render(){
///////STYLES
    const styles = {
      root: {
        backgroundColor: '#80CBC4',
        padding: '2rem 1rem',
        flexGrow: 1,
      },
      image: {
        height: '10rem',
      },
      imageContainer: {
        textAlign: 'right'
      }
    }

    return (
      <div style={styles.root}>
        <Grid justify='center'
          container spacing={32}>
            <Grid item>
              <img style={styles.image} src="https://firebasestorage.googleapis.com/v0/b/bit-cave.appspot.com/o/images%2F37032744_352891988576440_5188590810219675648_o.jpg?alt=media&token=911d1c25-4111-4342-a668-4edfb204dcf6"/>
            </Grid>
            <Grid item className="mobile-left center">
              <Typography variant="headline" className="pink">Come visit us</Typography>
              <p>{this.props.street}</p>
              <p>{this.props.phone}</p>
              {/* Add hours here */}
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default Location;
