import React from 'react';
import OurMovies from '../movie_search/our_movies';
import Timeline from './timeline';

class PeriodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  sendSearch(e) {
    e.preventDefault();
    this.props.searchByDateRange(this.state.startDate, this.state.endDate);
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
        <Timeline/>
        <div className='glass-pane'>
          <div className='glass-container flex-row'>
            <form onSubmit={this.sendSearch.bind(this)}>
              <label>Start Date</label>
              <input type='date' value={this.props.startDate} onChange={this.updateQuery('startDate')}></input>
              <label>End Date</label>
              <input type='date' value={this.props.endDate} onChange={this.updateQuery('endDate')}></input>
              <button className='left-margin'>Search</button>
            </form>
          </div>
        </div>
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
