import React from 'react';
import OurMovies from '../movie_search/our_movies';
import Timeline from './timeline';
import PeriodSelector from './period_selector';

class PeriodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minYear: -2000,
      maxYear: 2000,
    };
  }

  setLimits(min, max) {
    this.setState({minYear: min, maxYear: max});
    console.log(this.state);
  }

  render () {
    return (
      <div className='flex-column-center'>
        <header className='flex-row'>
          <div className='glass-pane'>
            <div className='glass-container'>
              <h2>Search for movies within a date range.</h2>
            </div>
          </div>
          <PeriodSelector setLimits={this.setLimits.bind(this)}/>
        </header>
        <Timeline
          searchByDateRange={this.props.searchByDateRange}
          minYear={this.state.minYear}
          maxYear={this.state.maxYear}
        />
        <div className='glass-pane'>
          <div className='glass-container'>
            <OurMovies movies={this.props.movies} ourMovieIDs={this.props.ourMovieIDs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PeriodSearch;
