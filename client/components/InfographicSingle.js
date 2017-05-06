import React from 'react';
import Photo from './Infographic';


const InfographicSingle = React.createClass({
  render(){
    return(
        <div className="single-photo">
        <Infographic i={i} infographic={infographic} {...this.props} />
        </div>
    )
  }
});

export default InfographicSingle;
