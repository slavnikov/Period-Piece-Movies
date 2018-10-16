import React from 'react';

class MovieVE extends React.Component {
  constructor(props){
    super(props);
    this.movie = this.props.movie || {};
    this.state = {
      title: this.movie.title || '',
      year: this.movie.year || '',
      start_date: this.movie.start_date || '',
      end_date: this.movie.end_date || '',
      overview: this.movie.overview || '',
      readOnly: true,
    };
  }

  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovie(this.props.match.params.movie_id);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.movie && nextProps.movie.title !== this.state.title) {
      this.setState(nextProps.movie);
    }
  }

  change(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateButton() {
    if (this.state.readOnly) {
      return null;
    } else {
      return (<button>Save Updates</button>);
    }
  }

  anyChanges() {
    return Object.keys(this.props.movie).some((param) => {
      if (param === 'id') {return false;}
      return this.props.movie[param] !== this.state[param];
    });
  }

  button() {
    if (this.state.readOnly) {
      return (<button onClick={() => {this.setState({readOnly: false});}}>Edit the Movie</button>);
    } else if(this.anyChanges()) {
      return (<button onClick={() => {this.props.updateMovie(this.state); this.setState({readOnly: true});}}>Save Changes</button>);
    } else {
      return (<button onClick={() => {this.setState({readOnly: true});}}>Cancel</button>);
    }
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
          <div className='glass-pane'>
            <div className='glass-container flex-column'>
              <form className='flex-column'>
                <table>
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
                      <input type='number' defaultValue={this.state.year} disabled></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Start Date</label>
                    </td>
                    <td>
                      <input
                        onChange={this.change('start_date')}
                        type='date'
                        value={this.state.start_date}
                        disabled={this.state.readOnly}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>End Date</label>
                    </td>
                    <td>
                      <input
                        onChange={this.change('end_date')}
                        type='date' value={this.state.end_date}
                        disabled={this.state.readOnly}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Overview</label>
                    </td>
                    <td>
                      <textarea
                        onChange={this.change('overview')}
                        value={this.state.overview}
                        disabled={this.state.readOnly}></textarea>
                    </td>
                  </tr>
                </table>
              </form>
              {this.button()}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MovieVE;
