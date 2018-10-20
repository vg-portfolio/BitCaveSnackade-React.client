import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMerchData } from '../actions';

import { Grid, Typography } from '@material-ui/core';
import MerchCard from '../containers/MerchCard';

//STYLES
const merchStyle = {
  root: {
    backgroundColor: '#44e4ca',
  },
  heading: {
    marginBottom: 5
  },
  description: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white'
  },
  merchItemContainer: {
    padding: '2rem'
  }
};


function mapStateToProps(state){
  return { merchData: state.merchData };
}


class MerchSection extends Component {
  componentWillMount(){
    //Fetch merch data from redux
    this.props.fetchMerchData();
  };
  //function to render merch data into merch cards
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
    return (
//Merch page view
      <Grid container
      className="center"
      style={merchStyle.root} >
{/* Merch banner */}
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
{/* Merch data cards container */}
        <Grid container item spacing={32} style={merchStyle.merchItemContainer}>
          {this.renderMerchData()}
        </Grid>
      </Grid>
    )
  };
}

export default connect(mapStateToProps, { fetchMerchData })(MerchSection);
