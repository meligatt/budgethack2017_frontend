import React from 'react';

class NavMenu extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="nav-bar-menu">
      <nav className="navBar">
        <nav className="wrapper">
          <div className="logo">Budget Buddy</div>
            <label for="menu-toggle" className="label-toggle"></label>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </nav>
      </div>
    );
  }
}
export default NavMenu;
