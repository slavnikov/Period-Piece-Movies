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

  componentWillUpdate(nextProps) {
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

  render () {
    if (!this.props.movie) {
      return <h1>Configuring the time machine right now...</h1>;
    }
    return (
      <div>
        <main>
          <h2>Movie Details:</h2>
          <form onSubmit={(e) => {
              e.preventDefault();
              this.props.updateMovie(this.state);
              this.setState({readOnly: true});
            }}>
            <label>Title</label>
            <input type='text' defaultValue={this.state.title} disabled></input>
            <label>Year</label>
            <input type='number' defaultValue={this.state.year} disabled></input>
            <label>Start Date</label>
            <input onChange={this.change('start_date')} type='date' value={this.state.start_date} disabled={this.state.readOnly}></input>
            <label>End Date</label>
            <input onChange={this.change('end_date')} type='date' value={this.state.end_date} disabled={this.state.readOnly}></input>
            <label>Overview</label>
            <textarea onChange={this.change('overview')} value={this.state.overview} disabled={this.state.readOnly}></textarea>
            {this.updateButton()}
          </form>
          <button onClick={() => {this.setState({readOnly: !this.state.readOnly});}}>Edit the Movie</button>
        </main>
      </div>
    );
  }
}

export default MovieVE;
