import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

class Location extends Component {
  render(){
///////STYLES
    const locationStyle = {
      section: {
        backgroundColor: '#80CBC4',
        padding: '4rem 2rem',
        display: 'flex',
      },
      image: {
        height: '10rem'
      },
      grid: {
        flexGrow: '2'
      }
    }

    return (
      <div style={locationStyle.section}>
        <Grid
          container>
          <Grid xs={12} sm={6}
            className="center"
            item >
            <img style={locationStyle.image} src="http://www.rockinrobinscafe.com/uploads/2/8/5/7/28575081/snackade-full-preview-2_1_orig.jpg"/>
          </Grid>
          <Grid
            item xs={12} sm={6}>
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
