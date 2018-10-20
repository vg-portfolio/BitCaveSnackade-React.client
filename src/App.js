import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMainSiteInfo } from './actions';
import './App.css';

import Banner from './components/Banner';
import Location from './components/Location';
import Gallery from './components/Gallery';

function mapStateToProps(state){
  return { siteInfo: state.siteInfo };
}

class App extends Component {
  componentWillMount(){
    this.props.fetchMainSiteInfo();
  }

  render() {
    //Site data
    const {
      header,
      aboutSection,
      location,
      phone,
      hours,
      hours2 } = this.props.siteInfo.siteData;

    return (
      <div className="App">
        <Banner className="Banner-section"
          siteTitle={header}
          details={aboutSection}/>

        <Location street={location} phone={phone} hours={hours} hours2={hours2}/>
        <Gallery />
      </div>
    );
  }
}



export default connect(mapStateToProps, { fetchMainSiteInfo })(App);
