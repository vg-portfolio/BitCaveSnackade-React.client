import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: '35rem',
  },
  subheader: {
    width: '100%',
  },
}

const Images = ({ images }) => {
  const imageCard = {
    backgroundColor: '#fb4e96'
  }

  return (
    <div style={style.root}>
      <GridList cellHeight={160} style={style.gridList} cols={4}>
        {images.map(image => (
          <GridListTile key={image} cols={1}>
            <img src={image} alt={image} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Images;
