import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGalleryImages } from '../actions';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../containers/ImageCard';


function mapStateToProps(state){
  console.log("MAP STATE TO PROPS GALLERY");
  return { siteData: state.siteInfo };
}


class Gallery extends Component {
  componentWillMount(){
    this.props.fetchGalleryImages();
  };

  render(){
    const galleryStyle = {
      section: {
        flexGrow: 1,
        backgroundColor: 'black'
      },
      loading: {
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        textAlign: 'center'
      }
    }
    if (this.props.siteData.gallery <= 0) {
      return ( <div style={galleryStyle.loading}>LOADING Gallery...</div>)
    }

      return (
        <div style={galleryStyle.section}>
          <Grid container justify='center'>
            <ImageCard images={this.props.siteData.gallery}/>
          </Grid>
        </div>
      )
  }
}

export default connect(mapStateToProps, { fetchGalleryImages })(Gallery);
