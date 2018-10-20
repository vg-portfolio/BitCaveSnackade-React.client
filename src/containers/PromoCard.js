import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

//Styles
const styles = {
  align: {
    margin: '0 auto',
  },
  paper: {
    padding: '1rem'
  }
};

const PromoCard = ({ image, title, details }) => {
  return (
      <Grid item xs={12} sm={10} style={styles.align}>
        <Paper elevation={3} style={styles.paper}>
          <Typography variant="title" gutterBottom>
            {title}
          </Typography>
          <Typography component="p">
            {details}
          </Typography>
        </Paper>
      </Grid>


  );
}


export default (PromoCard);
