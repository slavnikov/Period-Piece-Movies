import React from 'react';

const Footer = (props) => {
  return (
    <div className='glass-pane percent-w-100' id='footer'>
      <div className='glass-container percent-w-100' id='inner-footer'>
        <footer className="flex-row-space-between" >
          <ul className='flex-row'>
            <h5>v. 0.1</h5>
            <i className="devicon-rails-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-amazonwebservices-original"></i>
            <i className="devicon-webpack-plain"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-gimp-plain"></i>
          </ul>
          <ul className='flex-row'>
            <a href="http://www.slavnikov.com/"> <i className="fa fa-folder-open"></i></a>
            <a href="https://github.com/slavnikov"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/slavnikov"> <i className="fa fa-linkedin"></i></a>
            <a href="https://angel.co/dmitry-slavnikov"> <i className="fa fa-angellist"></i></a>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
