import React from 'react';

const Footer = (props) => {
  return (
    <div className='glass-pane percent-w-100' id='footer'>
      <div className='glass-container percent-w-100' id='inner-footer'>
        <footer className="flex-row-space-between" >
          <ul className='flex-row'>
            <i class="devicon-rails-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-postgresql-plain"></i>
            <i class="devicon-amazonwebservices-original"></i>
            <i class="devicon-webpack-plain"></i>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-gimp-plain"></i>
          </ul>
          <ul className='flex-row'>
            <a href="http://www.slavnikov.com/"> <i class="fa fa-folder-open"></i></a>
            <a href="https://github.com/slavnikov"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/slavnikov"> <i class="fa fa-linkedin"></i></a>
            <a href="https://angel.co/dmitry-slavnikov"> <i class="fa fa-angellist"></i></a>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
