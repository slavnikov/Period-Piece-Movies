import React from 'react';
import MapApi from '../period_search/map_api';
import { translateDate } from '../../util/gen_util';
import { fetchLocation } from '../../api/external_requests';

class MovieVE extends React.Component {
  constructor(props){
    super(props);
    this.movie = this.props.movie || {};
    this.state = {
      id: this.movie.id,
      title: this.movie.title || '',
      year: this.movie.year || '',
      start_year: this.movie.start_year || 0,
      end_year: this.movie.end_year || 0,
      overview: this.movie.overview || '',
      lat: this.movie.lat = this.movie.lat,
      lng: this.movie.lng = this.movie.lng,
      poster_path: this.movie.poster_path || '',
      location: '',
      readOnly: this.props.match.params.movie_id === 'new' ? false : true,
    };
  }

  componentDidMount() {
    if (!this.props.movie) {
      if (this.props.match.params.movie_id === 'new') {
        window.location.href = '#/movie_search';
      } else {
        this.props.fetchMovie(this.props.match.params.movie_id);
      }
    }
    this.printLocation();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.movie && nextProps.movie.title !== this.state.title) {
      this.setState(nextProps.movie);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lat !== this.state.lat) {
      this.printLocation();
    }
  }

  change(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  anyChanges() {
    return Object.keys(this.props.movie).some((param) => {
      if (param === 'id') {return false;}
      return this.props.movie[param] !== this.state[param];
    });
  }

  readyToSave() {
    return Object.keys(this.state).every((key) => {
      if (key === 'location' || key === 'readOnly') {return true;}
      return !!this.state[key] || this.state[key] === 0;
    });
  }

  button() {
    if (!this.props.currentUser) {return <h4>log in to edit entry</h4>;}
    if (this.state.id === 'new') {
      if (this.readyToSave()) {
        return <button
          className='pseudo-center'
          onClick={() => {
            this.props.createMovie(this.state).then((r) => {
              window.location.href = `#/movie/${Object.keys(r)[0]}`;
              this.setState({id: Object.keys(r)[0], readOnly: true});
            });
          }}>
          save entry
        </button>;
      } else {
        return <button className='pseudo-center'>entry incomplete</button>;
      }
    } else if (this.state.readOnly) {
      return (<button
        onClick={() => {this.setState({readOnly: false});}}
        className='pseudo-center'>
        Edit the Movie
      </button>);
    } else if(this.anyChanges()) {
      return (<button
        onClick={() => {this.props.updateMovie(this.state); this.setState({readOnly: true});}}
        className='pseudo-center'>
        Save Changes
      </button>);
    } else {
      return (<button
        onClick={() => {this.setState({readOnly: true});}}
        className='pseudo-center'>
        Cancel
      </button>);
    }
  }

  printLocation() {
    if (this.state.lat && this.state.lng) {
      fetchLocation(this.state.lat, this.state.lng).then((r) => {
        this.setState({location: r.results[0].formatted_address});
      });
    }
  }

  setLatLng(lat, lng) {
    this.setState({lat: lat, lng: lng});
  }

  render () {
    if (!this.props.movie) {
      return <h1>Configuring the time machine right now...</h1>;
    }
    return (
      <div>
        <main>
          <div className='glass-pane'>
            <div className='glass-container'>
              <h2>Movie Details:</h2>
            </div>
          </div>
          <div className='flex-row-space-between footer-padder' id='ves-main'>
            <div className='glass-pane percent-w-25'>
              <div className='glass-container flex-column'>
                <form className='flex-column'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>title</label>
                        </td>
                        <td>
                          <input type='text' defaultValue={this.state.title} disabled></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>year</label>
                        </td>
                        <td>
                          <input type='number' defaultValue={this.state.year} disabled></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>start year</label>
                        </td>
                        <td className='flex-row'>
                          <input
                            onChange={this.change('start_year')}
                            type={this.state.readOnly ? 'text' : 'number'}
                            value={this.state.readOnly ? translateDate(this.state.start_year) : this.state.start_year}
                            disabled={this.state.readOnly}>
                          </input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>end year</label>
                        </td>
                        <td className='flex-row'>
                          <input
                            onChange={this.change('end_year')}
                            type={this.state.readOnly ? 'text' : 'number'}
                            value={this.state.readOnly ? translateDate(this.state.end_year) : this.state.end_year}
                            disabled={this.state.readOnly}>
                          </input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>location</label>
                        </td>
                        <td>
                          <input type='text' defaultValue={this.state.location} disabled></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>overview</label>
                        </td>
                        <td>
                          <textarea
                            onChange={this.change('overview')}
                            value={this.state.overview}
                            disabled={this.state.readOnly}></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                {this.button()}
              </div>
            </div>
            <MapApi
              location='ves'
              readOnly={this.state.readOnly}
              setLatLng={this.setLatLng.bind(this)}
              markers={[this.state]}
            />
          <div className='glass-pane percent-w-25'>
              <div className='glass-container percent-w-100'>
                <img src={`https://image.tmdb.org/t/p/w500${this.state.poster_path}`} id='movie-poster'></img>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MovieVE;
