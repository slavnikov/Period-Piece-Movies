import React from 'react';

class MovieVE extends React.Component {
  constructor(props){
    super(props);
    this.movie = this.props.movie || {};
    this.state = {
      title: this.movie.title || '',
      year: this.movie.year || '',
      startDate: this.movie.start_date || '',
      endDate: this.movie.end_date || '',
      overview: this.movie.overview || '',
    };
  }

  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovie(this.props.match.params.movie_id);
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.movie && nextProps.movie.title !== this.state.title) {
      this.setState({
        title: nextProps.movie.title,
        year: nextProps.movie.year,
        startDate: nextProps.movie.start_date,
        endDate: nextProps.movie.end_date,
        overview: nextProps.movie.overview || '',
      });
    }
  }

  change() {
    return null;
  }

  render () {
    if (!this.props.movie) {
      return <h1>Configuring the time machine right now...</h1>;
    }
    return (
      <div>
        <main>
          <h2>Movie Details:</h2>
          <form>
            <label>Title</label>
            <input onChange={this.change} type='text' value={this.state.title}></input>
            <label>Year</label>
            <input onChange={this.change} type='number' value={this.state.year}></input>
            <label>Start Date</label>
            <input onChange={this.change} type='date' value={this.state.startDate}></input>
            <label>End Date</label>
            <input onChange={this.change} type='date' value={this.state.endDate}></input>
            <label>Overview</label>
            <textarea onChange={this.change} value={this.state.overview}></textarea>
          </form>
        </main>
      </div>
    );
  }
}

export default MovieVE;
