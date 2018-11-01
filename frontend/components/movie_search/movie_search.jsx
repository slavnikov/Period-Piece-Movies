import React from 'react';
import OurMovies from './our_movies';
import TmdbMovies from './tmdb_movies';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  updateQuery(e) {
    this.setState({query: e.currentTarget.value});
  }

  sendSearch(e) {
    e.preventDefault();
    this.props.searchByName(this.state.query);
  }

  render() {
    return (
        <main className='flex-column-center footer-padder'>
          <div className='glass-pane'>
            <div className='glass-container'>
              <h2>Movie Search</h2>
            </div>
          </div>
          <div className='glass-pane'>
            <div className='glass-container flex-row'>
              <form onSubmit={this.sendSearch}>
                <label>Movie or Show Name </label>
                <input
                  type='text'
                  value={this.state.query}
                  onChange={this.updateQuery}>
                </input>
                <button className='left-margin'>Submit</button>
              </form>
            </div>
          </div>
          <div className='flex-row-start percent-w-80'>
            <div className='glass-pane percent-w-50'>
              <div className='glass-container percent-w-100 flex-column-center'>
                <h5>timeline entires</h5>
                <OurMovies movies={this.props.movies} ourMovieIDs={this.props.ourMovieIDs}/>
              </div>
            </div>
            <div className='glass-pane percent-w-50'>
              <div className='glass-container percent-w-100 flex-column-center'>
                <h5>missing timeline data</h5>
                <TmdbMovies tmdbMovies={this.props.tmdbMovies} setTempMovie={this.props.setTempMovie}/>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default MovieSearch;
