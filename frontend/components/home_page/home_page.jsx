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
            <div className='glass-pane percent-w-100'>
              <div className='glass-container fill-width'>
                <nav className='flex-column-center'>
                  <Link to='/period_search' className='flex-column-center percent-w-100'>
                    <h3>period search</h3>
                  </Link>
                  <Link to='/movie_search' className='flex-column-center percent-w-100'>
                    <h3>name search</h3>
                  </Link>
                </nav>
              </div>
            </div>
          </aside>
          <div className='glass-pane percent-w-80'>
            <div className='glass-container fill-width'>
              <main id='home-main'>
                <h3>recent updates</h3>
                <p>10.29.18 - hosted the site live on AWS Elastic Beanstalk</p>
                <p>10.30.18 - remove the zoom on a single marker in period serach view</p>
                <p>10.30.18 - display on homepage the latest new database entries</p>
                <p>10.31.18 - improve period selection menu</p>
                <p>10.31.18 - show movie posters</p>
                <p>11.1.18 - extend the name search to include tv-shows</p>
                <p>11.1.18 - change negative and positive dates to use AD and BC</p>
                <h3>future features</h3>
                <p>- add more movies!!! (not really a feauture, but still big improvement area)</p>
                <p>- credit users who have been adding new entries</p>
                <p>- provide more information on map marker hover</p>
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
