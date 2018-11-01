import React from 'react';
import { dateRange } from '../../util/gen_util';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: this.props.minYear,
      slider2: this.props.maxYear,
    };
  }

  componentDidUpdate(prevProps) {
    const minMax = this.yearMinMax();

    if (minMax.min < this.props.minYear || minMax.max > this.props.maxYear) {
      this.setState(
        {slider1: this.props.minYear, slider2: this.props.maxYear},
        this.launchSearch.bind(this)
      );
    }
  }

  drag(slider) {
    return (e) => {
      this.setState({[slider]: e.currentTarget.value});
    };
  }

  displayDateRange() {
    const minMax = this.yearMinMax();
    return (<h2>{dateRange(minMax.min, minMax.max)}</h2>);
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
          <button onClick={() => this.props.setLimits(-2000, 2018)}><h6>reset</h6></button>
        </div>
      </div>
    );
  }
}

export default Timeline;
