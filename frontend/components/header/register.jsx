import React from 'react';

class Register extends React.Component {
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

  render () {
   return (
     <form className='flex-row' onSubmit={
         (e) => {
           e.preventDefault();
           this.props.createUser(this.state);
         }
       }>
       <label>email</label>
       <input type='email' onChange={this.edit('email')}></input>
       <label>password</label>
       <input type='password'  onChange={this.edit('password')}></input>
       <label>confirm password</label>
       <input type='password'  onChange={this.edit('password_confirmation')}></input>
       <button>Register</button>
     </form>
   );
  }
}

export default Register;
