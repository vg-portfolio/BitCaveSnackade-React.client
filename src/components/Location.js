import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

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
              <img style={styles.image} src="http://www.rockinrobinscafe.com/uploads/2/8/5/7/28575081/snackade-full-preview-2_1_orig.jpg"/>
            </Grid>
            <Grid item className="mobile-left center">
              <h4>Come visit us</h4>
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
