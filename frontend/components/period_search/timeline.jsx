import React from 'react';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: 15,
      slider2: 200,
      year1: '',
      year2: '',
    };
  }

  componentDidMount() {
    this.setRightBound();
    window.addEventListener('resize', this.setRightBound.bind(this));
  }

  getRightBound() {
    return document.getElementById('timeline').getBoundingClientRect().width-5;
  }

  getLeftBound() {
    return document.getElementById('timeline').getBoundingClientRect().left;
  }

  setRightBound() {
    this.setState({slider2: this.getRightBound()});
  }

  drag(e) {
    const leftBound = this.getLeftBound();
    this.setState(
      {[e.currentTarget.id]: e.pageX - leftBound},
      this.determineDateRange
    );
  }

  drop(e) {
    const leftBound = this.getLeftBound();
    const location = e.pageX - leftBound;

    let finalLocation;
    if (location < 15) {
      finalLocation = 15;
    } else if (location > this.getRightBound()) {
      finalLocation = this.getRightBound();
    } else {
      finalLocation = location;
    }
    this.setState(
      {[e.currentTarget.id]: finalLocation},
      this.launchSearch
    );
  }

  draggableLocation(slider) {
    return ({
      left: this.state[slider],
    });
  }

  determineDateRange() {
    const lower = this.state.slider1 < this.state.slider2 ? this.state.slider1 : this.state.slider2;
    const higher = this.state.slider1 > this.state.slider2 ? this.state.slider1 : this.state.slider2;
    const year1 = Math.floor(4000 * (lower-15) / this.getRightBound()) - 2000;
    const year2 = Math.ceil(4000 * (higher) / this.getRightBound()) - 2000;

    this.setState({year1: year1, year2: year2});
    return [year1, year2];
  }

  launchSearch() {
    const years = this.determineDateRange();
    this.props.searchByDateRange(years[0], years[1]);
  }

  render () {
    return (
      <div className='glass-pane'>
        <div className='glass-container'>
          <div id='timeline'>
            <div
              id='slider1'
              draggable='true'
              onDrag={this.drag.bind(this)}
              onDragEnd={this.drop.bind(this)}
              style={this.draggableLocation('slider1')}>
            </div>
            <div
              id='slider2'
              draggable='true'
              onDrag={this.drag.bind(this)}
              onDragEnd={this.drop.bind(this)}
              style={this.draggableLocation('slider2')}>
            </div>
          </div>
          <h2>{this.state.year1} - {this.state.year2}</h2>
        </div>
      </div>
    );
  }
}

export default Timeline;
