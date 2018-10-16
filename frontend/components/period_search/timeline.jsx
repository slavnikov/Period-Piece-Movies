import React from 'react';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: 15,
      slider2: 200,
    };
  }

  drag(e) {
    const leftBound = this.getLeftBound();
    this.setState({[e.currentTarget.id]: e.pageX - leftBound});
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
    this.setState({[e.currentTarget.id]: finalLocation}, this.determineDateRange);
  }

  draggableLocation(slider) {
    return ({
      left: this.state[slider],
    });
  }

  componentDidMount() {
    this.setRightBound();
    window.addEventListener('resize', this.setRightBound.bind(this));
  }

  setRightBound() {
    this.setState({slider2: this.getRightBound()});
  }

  getRightBound() {
    return document.getElementById('timeline').getBoundingClientRect().width-5;
  }

  getLeftBound() {
    return document.getElementById('timeline').getBoundingClientRect().left;
  }

  determineDateRange() {
    const lower = this.state.slider1 < this.state.slider2 ? this.state.slider1 : this.state.slider2;
    const higher = this.state.slider1 > this.state.slider2 ? this.state.slider1 : this.state.slider2;

    console.log(Math.floor(4000 * (lower-15) / this.getRightBound()) - 2000);
    console.log(Math.ceil(4000 * (higher) / this.getRightBound()) - 2000);
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
        </div>
      </div>
    );
  }
}

export default Timeline;
