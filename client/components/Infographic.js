import React from 'react';
import {Link} from 'react-router';

const Infographic = React.createClass({
  render() {
    const { infographic, i } = this.props;
      return (
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <Link to={`/view/${infographic.code}`}>
              <img src="http://placehold.it/250x350" className="grid-photo"/>
            </Link>
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
