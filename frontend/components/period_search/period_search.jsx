import React from 'react';
import OurMovies from '../movie_search/our_movies';
import Timeline from './timeline';

class PeriodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startYear: 0,
      endYear: 0,
    };
  }

  sendSearch(e) {
    e.preventDefault();
    this.props.searchByDateRange(this.state.startYear, this.state.endYear);
  }

  updateQuery(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    return (
      <div className='flex-column-center'>
        <div className='glass-pane'>
          <div className='glass-container'>
            <h2>Search for movies within a date range.</h2>
          </div>
        </div>
        <Timeline searchByDateRange={this.props.searchByDateRange}/>
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
