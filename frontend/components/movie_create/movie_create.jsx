import React from 'react';

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
    };
  }

  change(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render () {
    return (
      <div>
        <main>
          <h2>Import New Movie Details:</h2>
          <form>
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
          </form>
        </main>
      </div>
    );
  }
}

export default MovieCreate;
