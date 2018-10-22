import React from 'react';

class OmniForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  edit(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  variableContent() {
    if (this.props.signIn) {
      return (
        <button>sign in</button>
      );
    } else {
      return (
        <div className='wrapper'>
          <label>confirm password</label>
          <input type='password'  onChange={this.edit('password_confirmation')}></input>
          <button>register</button>
        </div>
      );
    }
  }

  variableSubmit() {
    if (this.props.signIn) {
      return (e) => {
        e.preventDefault();
        this.props.login(this.state);
      };
    } else {
      return (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
      };
    }
  }

  render () {
   return (
     <form className='flex-row' onSubmit={this.variableSubmit()}>
       <label>email</label>
       <input type='email' onChange={this.edit('email')}></input>
       <label>password</label>
       <input type='password'  onChange={this.edit('password')}></input>
       {this.variableContent()}
     </form>
   );
  }
}

export default OmniForm;
