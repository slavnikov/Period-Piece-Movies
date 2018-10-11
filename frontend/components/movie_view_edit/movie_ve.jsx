import React from 'react';

class MovieVE extends React.Component {
  constructor(props){
    super(props);
    this.movie = this.props.movies[this.props.match.params.movie_id];
    this.state = {
      title: this.movie.title,
      year: this.movie.year,
      startDate: this.movie.start_date,
      endDate: this.movie.end_date,
      overview: this.movie.overview,
    };
  }

  render () {
    if (!this.movie) {
      return <h1>Configuring the time machine right now...</h1>;
    }
    
    return (
      <div>
        <main>
          <h2>Movie Details:</h2>
          <form>
            <label>Title</label>
            <input type='text' value={this.state.title}></input>
            <label>Year</label>
            <input type='number' value={this.state.year}></input>
            <label>Start Date</label>
            <input type='date' value={this.state.startDate}></input>
            <label>End Date</label>
            <input type='date' value={this.state.endDate}></input>
            <label>Overview</label>
            <textarea value={this.state.overview}></textarea>
          </form>
        </main>
      </div>
    );
  }
}

export default MovieVE;
