import React from 'react';
import Infographic from './Infographic';

const InfographicGrid = React.createClass({
  render(){
    console.log(this.props);
    return(
        <div className="photo-grid">
          { this.props.infographics.map((item, i) => <Infographic {...this.props} key={i} i={i} infographic={item} />) }
        </div>
    )
  }
});

export default InfographicGrid;
