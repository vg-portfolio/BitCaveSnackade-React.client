import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    textAlign: "center"
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
          <CardActionArea>
            <CardMedia
              component="img"
              style={styles.media}
              alt={title}
              image={"https://img.grouponcdn.com/deal/2bBNMDFvFZz2Fi1JfPjDfnHyS5RH/2b-700x420/v1/c700x420.jpg"}
              title={title}
            />
            <CardContent style={styles.card}>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <Typography component="p">
                {details}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={styles.price}>
            <Typography variant="subheading">
              {price}
            </Typography>
          </CardActions>
        </Card>
      </Grid>


  );
}


export default (MerchCard);
