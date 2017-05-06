import React from 'react';
import {Link} from 'react-router';

const Infographic = React.createClass({
  render() {
      return (
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <img src="http://placehold.it/250x350" className="grid-photo"/>
          </div>
          <figcaption>
            <p>placeholder caption</p>
            <div className="control-buttons">
              <button className="likes">
                ✰ Share ✰
              </button>
            </div>
          </figcaption>
        </figure>
      )
  }
});
export default Infographic;
