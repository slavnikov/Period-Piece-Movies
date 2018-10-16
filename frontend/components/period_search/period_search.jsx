import React from 'react';
import OurMovies from '../movie_search/our_movies';

class PeriodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      slider1: 15,
      slider2: 200,
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

  drag(e) {
    this.setState({[e.currentTarget.id]: e.pageX - 45});
  }

  draggableLocation(slider) {
    return ({
      left: this.state[slider],
    });
  }

  render () {
    return (
      <div>
        <div className='glass-pane'>
          <div className='glass-container'>
            <h2>Search for movies within a date range.</h2>
          </div>
        </div>
        <div className='glass-pane'>
          <div className='glass-container'>
            <div id='timeline'>
              <div
                id='slider1'
                draggable='true'
                onDrag={this.drag.bind(this)}
                onDragEnd={this.drag.bind(this)}
                style={this.draggableLocation('slider1')}>
              </div>
              <div
                id='slider2'
                draggable='true'
                onDrag={this.drag.bind(this)}
                onDragEnd={this.drag.bind(this)}
                style={this.draggableLocation('slider2')}>
              </div>
            </div>
          </div>
        </div>
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
