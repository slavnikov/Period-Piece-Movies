import React from 'react';
import Register from './register';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  variableContent() {
    if (this.props.currentUser) {
      return (
        <div className='glass-container flex-column-center' id='inner-header'>
          <h5 className='pseudo-center'>{this.props.currentUser.email}</h5>
          <form><button>logout</button></form>
        </div>
      );
    } else {
      return (
        <div className='glass-container flex-column-center' id='inner-header'>
          <h5 className='pseudo-center'>HOVER TO <button>SIGN IN</button> OR <button>REGISTER</button></h5>
          <Register createUser={this.props.createUser}/>
        </div>
      );
    }
  }

  render () {
    return (
      <div className='glass-pane' id='header'>
        {this.variableContent()}
      </div>
    );
  }
}

export default Header;
