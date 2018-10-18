import React from 'react';

const Register = (props) => {
  return (
    <form className='flex-row'>
      <label>email</label>
      <input type='email'></input>
      <label>password</label>
      <input type='password'></input>
      <label>confirm password</label>
      <input type='password'></input>
      <button>Submit</button>
    </form>
  );
};

export default Register;
