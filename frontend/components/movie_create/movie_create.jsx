import React from 'react';
import { Redirect } from 'react-router-dom';

class MovieCreate extends React.Component {
  constructor(props) {
    super(props);
    this.movie = this.props.tmdbMovie || {};
    this.state = {
      title: this.movie.title,
      year: this.movie.year || '',
      start_date: '',
      end_date: '',
      overview: this.movie.overview || '',
      savedMovieID: false,
    };
  }

  change(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  componentWillUpdate(nextProps){
    const savedMovie = Object.values(nextProps.movies).filter((movie) => {
      return movie.title === this.state.title && movie.year === this.state.year;
    });

    if (savedMovie[0]) {
      this.setState({savedMovieID: savedMovie[0].id});
    }
  }

  render () {
    if (!this.movie.title) {
      return (<Redirect to='/movie_search'/>);
    } else if (this.state.savedMovieID) {
      return (<Redirect to={`/movie/${this.state.savedMovieID}`}/>);
    }

    return (
      <div>
        <main>
          <h2>Import New Movie Details:</h2>
          <form onSubmit={(e) => {
              e.preventDefault();
              this.props.createMovie(this.state);
            }}>
            <label>Title</label>
            <input type='text' defaultValue={this.state.title} disabled></input>
            <label>Year</label>
            <input onChange={this.change('year')} type='number' defaultValue={this.state.year} disabled={this.state.year}></input>
            <label>Start Date</label>
            <input onChange={this.change('start_date')} type='date' value={this.state.start_date} disabled={this.state.readOnly}></input>
            <label>End Date</label>
            <input onChange={this.change('end_date')} type='date' value={this.state.end_date} disabled={this.state.readOnly}></input>
            <label>Overview</label>
            <textarea onChange={this.change('overview')} value={this.state.overview} disabled={this.state.readOnly}></textarea>
            <button>Save Movie</button>
          </form>
        </main>
      </div>
    );
  }
}

export default MovieCreate;
