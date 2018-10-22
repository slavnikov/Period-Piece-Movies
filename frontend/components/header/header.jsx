import React from 'react';
import OmniForm from './omni_form';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
    };
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
          <h5 className='pseudo-center'>
            HOVER TO&nbsp;
            <button onClick={() => {this.setState({signIn: true});}}>
              SIGN IN
            </button>
            &nbsp;OR&nbsp;
            <button onClick={() => {this.setState({signIn: false});}}>
              REGISTER
            </button>
          </h5>
          <OmniForm signIn={this.state.signIn} createUser={this.props.createUser}/>
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
