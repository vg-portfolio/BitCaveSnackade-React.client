import React from 'react';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  //STYLES
    const footerStyle = {
      footerMain: {
        bottom: '0',
        backgroundColor: '#263238',
        height: '10em',
        padding: '1.2em'
      }
    }

    return (
      <div style={footerStyle.footerMain}>
        <Grid container spacing={6} justify='center'>
          <Grid item xs={4}>
            <li>RTest</li>
            <li>RTest</li>
            <li>RTest</li>
          </Grid>
          <Grid item xs={4}>
            <li>RTest</li>
            <li>RTest</li>
          </Grid>
        </Grid>
      </div>
    );

}

export default Footer;
