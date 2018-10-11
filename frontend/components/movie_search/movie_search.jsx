import React from 'react';

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
      <div>
        <main>
          <header>
            <h1>Search for Movies in our timeline!</h1>
          </header>
          <form onSubmit={this.sendSearch}>
            <label>Movie Name or Part</label>
            <input
              type='text'
              value={this.state.query}
              onChange={this.updateQuery}>
            </input>
            <button>Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default MovieSearch;
