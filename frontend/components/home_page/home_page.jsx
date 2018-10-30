import React from 'react';
import { Link } from 'react-router-dom';
import RecentAdditions from './recent_additions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecent();
  }

  render () {
    return (
      <div className='flex-column'>
        <div className='flex-row' id='home'>
          <aside className='flex-column-center percent-w-20' id='aside-home'>
            <div className='glass-pane fill-width'>
              <div className='glass-container fill-width'>
                <h2><em>period</em></h2>
                <h2><em>piece</em></h2>
                <h2><em>movies</em></h2>
              </div>
            </div>
            <div className='glass-pane'>
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
          </aside>
          <div className='glass-pane percent-w-80'>
            <div className='glass-container fill-width'>
              <main id='home-main'>
                <h3>the goal</h3>
                <p>Period Piece Moves was created to allow people to explore world history through the lens of movies and tv shows set in specific time periods and specific geographic locations. The main attraction of the site is the period serach. Think of it like a time machine: you select a time period to visit, and it gives you all the possible global destinations. Try it out! Unfortunately, there is no one place on repository with information about the hisotrical setting of every movie and tv show; in fact, that is what Period Piece Movies set out to become. This kind of information can be hard to find, but where there's a will, there's a way. If you have a favorite movie - it does not have to be a documentary or docu-drama, just something with a depiction of how someplace was at sometime - make an account and add it to our databse to share with others. Your contribution will be highlighted on the homepage (feauture feature :D) and it will go a long way to making this a resoruce for hisotry buffs and amateur time-travelers alike.<br/><br/>Again, welcome!<br/><em>sdo 10.26.18</em></p>
                <h3>recent updates</h3>
                <p>10.29.18 - hosted the site live on AWS Elastic Beanstalk</p>
                <p>10.30.18 - remove the zoom on a single marker in period serach view</p>
                <p>10.30.18 - display on homepage the latest new database entries</p>
                <h3>future features</h3>
                <p>- add more movies!!! (not really a feauture, but still big improvement area)</p>
                <p>- extend the name search to include tv-shows</p>
                <p>- change negative and positive dates to use AD and BC</p>
                <p>- credit users who have been adding new entries</p>
                <p>- show movie poster on movie view page</p>
                <p>- provide more information on map marker hover</p>
                <p>- automate databse extraction to prevent accidental incompatability (admin)</p>
              </main>
            </div>
          </div>
        </div>
        <RecentAdditions recentMovies={this.props.recentMovies}/>
      </div>
    );
  }
}

export default HomePage;
