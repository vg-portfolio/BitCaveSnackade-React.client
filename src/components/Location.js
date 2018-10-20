import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

//STYLES
    const styles = {
      root: {
        backgroundColor: '#80CBC4',
        padding: '2rem 1rem',
        flexGrow: 1,
      },
      image: {
        height: '15rem',
        maxWidth: '100%'
      },
      imageContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'hidden',
      }
    }

class Location extends Component {
  render(){
    return (
      <div style={styles.root}>
        <Grid style={styles.imageContainer} justify='center'
          container spacing={32}>
{/* Image container */}
            <Grid item style={styles.imageContainer}>
              <img style={styles.image} src="https://firebasestorage.googleapis.com/v0/b/bit-cave.appspot.com/o/images%2F37032744_352891988576440_5188590810219675648_o.jpg?alt=media&token=911d1c25-4111-4342-a668-4edfb204dcf6" alt=""/>
            </Grid>
{/* Text container */}
            <Grid item className="mobile-left center">
              <Typography variant="headline" className="pink">Come find us</Typography>
              <h4>{this.props.street}</h4>
              <div>
                <p><span className="pink">Phone: </span>{this.props.phone}</p>
                <p><span className="pink">Mon-Sat: </span>{this.props.hours}</p>
                <p><span className="pink">Sunday: </span>{this.props.hours2}</p>
              </div>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default Location;
