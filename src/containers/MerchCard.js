import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

//STYLES
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  card: {
    textAlign: "center"
  },
  images: {
    maxWidth: '100%',
    height: 'auto'
  },
  media: {
    height: '15rem',
    margin: '0 auto',
    backgroundSize: 'contain',
    flexGrow: 1
  },
  price: {
    justifyContent: 'flex-end',
  }
};

const MerchCard = ({ image, title, details, price }) => {
  return (
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Card>
          <CardActionArea style={styles.conatiner}>
            <CardMedia
              component="img"
              style={styles.media}
              alt={title}
              image={image}
              title={title}
            />
          </CardActionArea>
        </Card>
      </Grid>


  );
}


export default (MerchCard);
