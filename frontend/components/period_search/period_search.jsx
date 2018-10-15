import React from 'react';
import OurMovies from '../movie_search/our_movies';

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
      <div>
        <h1>Search for movies within a date range.</h1>
        <form onSubmit={this.sendSearch.bind(this)}>
          <label>Start Date</label>
          <input type='date' value={this.props.startDate} onChange={this.updateQuery('startDate')}></input>
          <label>End Date</label>
          <input type='date' value={this.props.endDate} onChange={this.updateQuery('endDate')}></input>
          <button>Search</button>
        </form>
        <OurMovies movies={this.props.movies} ourMovieIDs={this.props.ourMovieIDs}/>
      </div>
    );
  }
}

export default PeriodSearch;
