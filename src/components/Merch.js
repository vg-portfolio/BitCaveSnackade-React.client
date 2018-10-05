import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMerchData } from '../actions';

import { Grid, Typography } from '@material-ui/core';
import MerchCard from '../containers/MerchCard';


function mapStateToProps(state){
  console.log("MAP STATE TO PROPS MERCH", state);
  return { merchData: state.merchData };
}


class MerchSection extends Component {
  componentWillMount(){
    console.log("merch components will mount")
    const res = this.props.fetchMerchData();
    console.log("RES", res);
    console.log("MECH DATA", this.props.merchData);
  };

  renderMerchData(){
    if (this.props.merchData.merchData.items) {
      return this.props.merchData.merchData.items.map(item => (
        <MerchCard
          key={item.id}
          image={item.imageUrl}
          title={item.name}
          details={item.description}
          price={item.price} />
      ))
    };
    return ( <div>LOADING...</div>);

  };

  render(){
    //STYLE
    const merchStyle = {
      root: {
        backgroundColor: '#44e4ca',
      },
      description: {
        color: 'white'
      },
      merchItemContainer: {
        padding: '2rem'
      }
    };

    return (
      <Grid container
      className="center"
      style={merchStyle.root} >
        <Grid className="merch-container" justify="center" container item xs={12}>
          <Grid item className="text-container container">
            <Typography className="green" variant="display3" style={merchStyle.heading}>
              {this.props.merchData.merchData.heading}
            </Typography>
            <Typography variant="headline" style={merchStyle.description}>
              {this.props.merchData.merchData.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={32} style={merchStyle.merchItemContainer}>
          {this.renderMerchData()}
        </Grid>
      </Grid>
    )
  };
}

export default connect(mapStateToProps, { fetchMerchData })(MerchSection);
