import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div className='flex-row' id='home'>
      <div className='glass-pane percent-w-20'>
        <div className='glass-container fill-width'>
          <nav className='flex-column-center'>
            <Link to='/period_search' className='flex-column-center'>
              <h3>period search</h3>
              <p>Drag an interactive timeline or select a famous period from a drop down and see a snapshot of the world through the movies and tv shows set in that time period.</p>
            </Link>
            <Link to='/movie_search' className='flex-column-center'>
              <h3>name search</h3>
              <p>Have a movie in mind? Find one to see where it fits in on the global timeline or add one and share what you know about it with others.</p>
            </Link>
          </nav>
        </div>
      </div>
      <div className='glass-pane percent-w-80'>
        <div className='glass-container fill-width'>
          <main id='home-main'>
            <h2>welcome to <i>period piece movies (v 0.1)</i></h2>
            <h3>the goal</h3>
            <p>Period Piece Moves was created to allow people to explore world history through the lens of movies and tv shows set in specific time periods and specific geographic locations. The main attraction of the site is the period serach. Think of it like a time machine: you select a time period to visit, and it gives you all the possible global destinations. Try it out! Unfortunately, there is no one place on repository with information about the hisotrical setting of every movie and tv show; in fact, that is what Period Piece Movies set out to become. This kind of information can be hard to find, but where there's a will, there's a way. If you have a favorite movie - it does not have to be a documentary or docu-drama, just something with a depiction of how someplace was at sometime - make an account and add it to our databse to share with others. Your contribution will be highlighted on the homepage (feauture feature :D) and it will go a long way to making this a resoruce for hisotry buffs and amateur time-travelers alike.<br/><br/>Again, welcome!<br/><i>sdo 10.26.18</i></p>
            <h3>updates</h3>
            <h3>future features</h3>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
