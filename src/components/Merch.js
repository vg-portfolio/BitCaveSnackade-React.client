import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MerchCard from '../containers/MerchCard';

class MerchSection extends Component {
  render(){
    //STYLE
    const merchStyle = {
      root: {
        backgroundColor: '#111111',
      },
      heading: {
        color: '#44e4ca',
      },
      description: {
        color: 'white'
      }

    }

    return (
      <Grid container
        className="container center"
        style={merchStyle.root} >
        <Grid item xs={12}>
          <h2 style={merchStyle.heading}>MERCH</h2>
          <p style={merchStyle.description}>This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.</p>
        </Grid>
        <Grid item xs={12}>
          <MerchCard/>
        </Grid>
      </Grid>
    );
  }
}

export default MerchSection;
