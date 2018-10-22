import React from 'react';
import { Redirect } from 'react-router-dom';

class MovieCreate extends React.Component {
  constructor(props) {
    super(props);
    this.movie = this.props.tmdbMovie || {};
    this.state = {
      title: this.movie.title,
      year: this.movie.year || '',
      start_year: 0,
      end_year: 0,
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
          <div className='glass-pane'>
            <div className='glass-container'>
              <h2>Import New Movie Details:</h2>
            </div>
          </div>
          <div className='glass-pane'>
            <div className='glass-container flex-column'>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.createMovie(this.state);
                }}
                className='flex-column-center'>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Title</label>
                      </td>
                      <td>
                        <input type='text' defaultValue={this.state.title} disabled></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Year</label>
                      </td>
                      <td>
                        <input onChange={this.change('year')} type='number' defaultValue={this.state.year} disabled={this.state.year}></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Start Year</label>
                      </td>
                      <td>
                        <input onChange={this.change('start_year')} type='number' value={this.state.start_year} disabled={this.state.readOnly}></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>End Year</label>
                      </td>
                      <td>
                        <input onChange={this.change('end_year')} type='number' value={this.state.end_year} disabled={this.state.readOnly}></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Overview</label>
                      </td>
                      <td>
                        <textarea onChange={this.change('overview')} value={this.state.overview} disabled={this.state.readOnly}></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {this.props.currentUser ? <button>Save Movie</button> : null}
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MovieCreate;
