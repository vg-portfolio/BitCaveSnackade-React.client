import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMainSiteInfo } from './actions';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner';
import Location from './components/Location';
import Gallery from './components/Gallery';

function mapStateToProps(state){
  console.log("MAP STATE TO PROPS");
  return { siteInfo: state.siteInfo };
}

class App extends Component {
  componentWillMount(){
    console.log("APP.JS component loaded");
    console.log("FETCHING");
    this.props.fetchMainSiteInfo();
  }
  // renderData(){
  //   return this.props.siteInfo.data;
  // }

  render() {
    //Site data
    const {
      header,
      aboutSection,
      location,
      phone } = this.props.siteInfo.siteData;
      // console.log("YASS", this.props.siteInfo);

    return (
      <div className="App">
        <Banner className="Banner-section"
          siteTitle={header}
          details={aboutSection}/>

        <Location street={location} phone={phone}/>
        <Gallery />
        {/* <h1 className="App-title">{this.props.siteInfo.data.header}</h1>
        <p className="App-intro">
          {this.props.siteInfo.data.body}
        </p>
        <p></p> */}
      </div>
    );
  }
}



export default connect(mapStateToProps, { fetchMainSiteInfo })(App);
