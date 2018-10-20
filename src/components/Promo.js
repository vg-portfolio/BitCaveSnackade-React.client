import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPromoData } from '../actions';

import { Grid, Typography } from '@material-ui/core';
import PromoCard from '../containers/PromoCard';


function mapStateToProps(state){
  console.log("MAP STATE TO PROPS PROMO", state);
  return { promoData: state.promoData };
}


class PromoSection extends Component {
  componentWillMount(){
    console.log("promo components will mount")
    const res = this.props.fetchPromoData();
    console.log("RES", res);
    console.log("PROMO DATA", this.props.promoData);
  };

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
    return ( <div>LOADING...</div>);

  };

  render(){
    //STYLE
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

    return (
      <Grid container
      className="center"
      style={promoStyle.root} >
        <Grid className="promo-container" justify="center" container item xs={12}>
          <Grid item className="text-container container">
            <Typography className="green" variant="display3" style={promoStyle.heading}>
              {this.props.promoData.promoData.heading}
            </Typography>
            <Typography variant="headline" style={promoStyle.description}>
              {this.props.promoData.promoData.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={32} style={promoStyle.promoItemContainer}>
          {this.renderPromoData()}
        </Grid>
        <div className="nylon-cat-container">
          <img className="nylon-cat" src="https://i.pinimg.com/originals/3e/50/c8/3e50c82d8802a640d1e68cf7a7427d74.gif"/>
        </div>
      </Grid>
    )
  };
}

export default connect(mapStateToProps, { fetchPromoData })(PromoSection);
