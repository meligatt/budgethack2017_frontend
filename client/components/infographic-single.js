import React from 'react';
import Infographic from './infographic';

const InfographicSingle = React.createClass({
  render(){
    const { infographicId } = this.props.params;

     // index of the infographic
    const i = this.props.infographics.findIndex(
      (infographic) => infographic.code === infographicId);

    // get us the infographic
    const infographic = this.props.infographics[i];

    return(
        <div className="single-photo">
        <Infographic i={i} infographic={infographic} {...this.props} />
        </div>
    )
  }
});

export default InfographicSingle;
