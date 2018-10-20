import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPromoData } from '../actions';

import { Grid, Typography } from '@material-ui/core';
import PromoCard from '../containers/PromoCard';

//STYLES
const promoStyle = {
  root: {
    backgroundColor: '#fb4e96',
    backgroundSize: 'contain'
  },
  heading: {
    marginBottom: 5
  },
  description: {
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white'
  },
  promoItemContainer: {
    padding: '2rem',
  }
};

function mapStateToProps(state){
  return { promoData: state.promoData };
}

class PromoSection extends Component {
  componentWillMount(){
    //Fetches the promo data from store
    this.props.fetchPromoData();
  };

  //Function that renders the the data to cards
  renderPromoData(){
    if (this.props.promoData.promoData.items) {
      return this.props.promoData.promoData.items.map(item => (
        <PromoCard
          key={item.id}
          image={item.imageUrl}
          title={item.name}
          details={item.description} />
      ))
    };
    //Display loading if there is no data available
    return ( <div>LOADING...</div>);
  };

  render(){
    return (
//Promo page view
      <Grid container
      className="center"
      style={promoStyle.root}>
{/* Promos banner */}
        <Grid className="promo-container" justify="center" container item xs={12}>
          <Grid item className="text-container container">
            <Typography className="green" variant="display2" style={promoStyle.heading}>
              {this.props.promoData.promoData.heading}
            </Typography>
            <Typography variant="headline" style={promoStyle.description}>
              {this.props.promoData.promoData.description}
            </Typography>
          </Grid>
        </Grid>
{/* Cards with data container */}
        <Grid container item spacing={32} style={promoStyle.promoItemContainer}>
          {this.renderPromoData()}
        </Grid>
{/* Nylon cat gif */}
        <div className="nylon-cat-container">
          <img className="nylon-cat" src="https://i.pinimg.com/originals/3e/50/c8/3e50c82d8802a640d1e68cf7a7427d74.gif" alt=""/>
        </div>
      </Grid>
    )
  };
}

export default connect(mapStateToProps, { fetchPromoData })(PromoSection);
