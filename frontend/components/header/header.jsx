import React from 'react';
import Register from './register';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='glass-pane' id='header'>
        <div className='glass-container flex-column-center' id='inner-header'>
          <h5 className='pseudo-center'>HOVER TO SIGN IN OR REGISTER</h5>
          <Register createUser={this.props.createUser}/>
        </div>
      </div>
    );
  }
}

export default Header;
