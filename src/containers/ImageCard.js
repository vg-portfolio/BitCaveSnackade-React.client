import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Images = ({ title, description }) => {
  const imageCard = {
    backgroundColor: '#fb4e96'
  }
  
  return (
    <Card style={imageCard} key={title}>
      <CardContent className="center">
        <p>{title}</p>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default Images;
