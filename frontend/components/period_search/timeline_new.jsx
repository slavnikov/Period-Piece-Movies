import React from 'react';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // year1: this.props.minYear,
      // year2: this.props.maxYear,
      slider1: this.props.minYear,
      slider2: this.props.maxYear,
    };
  }

  // componentDidMount() {
  //   this.setRightBound();
  //   window.addEventListener('resize', this.setRightBound.bind(this));
  // }

  componentDidUpdate(prevProps) {
    const minMax = this.yearMinMax();

    if (minMax.min < this.props.minYear || minMax.max > this.props.maxYear) {
      this.setState(
        {slider1: this.props.minYear, slider2: this.props.maxYear},
        this.launchSearch.bind(this)
      );
    }
  }

  // getRightBound() {
  //   return document.getElementById('timeline').getBoundingClientRect().width-5;
  // }

  // getLeftBound() {
  //   return document.getElementById('timeline').getBoundingClientRect().left;
  // }

  // setRightBound() {
  //   this.setState({slider2: this.getRightBound()});
  // }

  // drag(e) {
  //   const leftBound = this.getLeftBound();
  //   this.setState(
  //     {[e.currentTarget.id]: e.pageX - leftBound},
  //     this.determineDateRange
  //   );
  // }

  // drop(e) {
  //   const leftBound = this.getLeftBound();
  //   const location = e.pageX - leftBound;
  //
  //   let finalLocation;
  //   if (location < 15) {
  //     finalLocation = 15;
  //   } else if (location > this.getRightBound()) {
  //     finalLocation = this.getRightBound();
  //   } else {
  //     finalLocation = location;
  //   }
  //   this.setState(
  //     {[e.currentTarget.id]: finalLocation},
  //     this.launchSearch
  //   );
  // }

  // draggableLocation(slider) {
  //   return ({
  //     left: this.state[slider],
  //   });
  // }

  // determineDateRange() {
  //   const minYear = this.props.minYear;
  //   const maxYear = this.props.maxYear;
  //   const span = maxYear - minYear;
  //   const lower = this.state.slider1 < this.state.slider2 ? this.state.slider1 : this.state.slider2;
  //   const higher = this.state.slider1 > this.state.slider2 ? this.state.slider1 : this.state.slider2;
  //   const year1 = Math.floor(span * ((lower-15) / this.getRightBound())) + minYear;
  //   const year2 = Math.ceil(span * ((higher) / this.getRightBound())) + minYear;
  //
  //   this.setState({year1: year1, year2: year2});
  //   return [year1, year2];
  // }

  // launchSearch() {
  //   const years = this.determineDateRange();
  //   this.props.searchByDateRange(years[0], years[1]);
  // }

  drag(slider) {
    return (e) => {
      this.setState({[slider]: e.currentTarget.value});
    };
  }

  displayDateRange() {
    const minMax = this.yearMinMax();
    return (<h2>{minMax.min} - {minMax.max}</h2>);
  }

  yearMinMax() {
    if (this.state.slider1 < this.state.slider2) {
      return {min: this.state.slider1, max: this.state.slider2};
    } else {
      return {min: this.state.slider2, max: this.state.slider1};
    }
  }

  launchSearch() {
    const minMax = this.yearMinMax();
    this.props.searchByDateRange(minMax.min, minMax.max);
  }

  render () {
    return (
      <div className='glass-pane'>
        <div className='glass-container flex-column-center' id='timeline'>
          <input
            type='range'
            min={this.props.minYear}
            max={this.props.maxYear}
            value={this.state.slider1}
            step='1'
            onChange={this.drag('slider1')}
            onMouseUp={this.launchSearch.bind(this)}
            className='timeline'>
          </input>
          <input
            type='range'
            min={this.props.minYear}
            max={this.props.maxYear}
            value={this.state.slider2}
            step='1'
            onChange={this.drag('slider2')}
            onMouseUp={this.launchSearch.bind(this)}
            className='timeline'
            id='second-slider'>
          </input>
          <p>drag timeline to refine timespan</p>
          {this.displayDateRange()}
          <button onClick={() => this.props.setLimits(-2000, 2000)}><h6>reset</h6></button>
        </div>
      </div>
    );
  }
}

export default Timeline;
