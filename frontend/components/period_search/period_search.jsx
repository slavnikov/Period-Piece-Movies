import React from 'react';
import OurMovies from '../movie_search/our_movies';
import Timeline from './timeline_new';
import PeriodSelector from './period_selector';
import MapApi from './map_api';

class PeriodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minYear: -2000,
      maxYear: 2018,
    };
  }

  componentDidMount() {
    this.props.fetchPeriods();
  }

  setLimits(min, max) {
    this.setState({minYear: min, maxYear: max});
    console.log(this.state);
  }

  filterMovies() {
    return Object.values(this.props.movies).filter((movie) => {
      return this.props.ourMovieIDs.includes(movie.id);
    });
  }

  render () {
    return (
      <div className='flex-column-center footer-padder'>
        <div className='flex-row-space-between'>
          <PeriodSelector
            setLimits={this.setLimits.bind(this)}
            timePeriods={this.props.timePeriods}
            periodFilters={this.props.periodFilters}
            />
          <Timeline
            setLimits={this.setLimits.bind(this)}
            searchByDateRange={this.props.searchByDateRange}
            minYear={this.state.minYear}
            maxYear={this.state.maxYear}
            />
        </div>
      <MapApi location='ps' markers={this.filterMovies()}/>
      </div>
    );
  }
}

export default PeriodSearch;
