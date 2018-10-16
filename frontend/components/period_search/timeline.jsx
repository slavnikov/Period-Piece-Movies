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
    const leftBound = document.getElementById('timeline').getBoundingClientRect().left;
    this.setState({[e.currentTarget.id]: e.pageX - leftBound});
  }

  drop(e) {
    const leftBound = document.getElementById('timeline').getBoundingClientRect().left;
    const location = e.pageX - leftBound;

    let finalLocation;
    if (location < 15) {
      finalLocation = 15;
    } else if (location > this.getRightBound()) {
      finalLocation = this.getRightBound();
    } else {
      finalLocation = location;
    }
    this.setState({[e.currentTarget.id]: finalLocation});
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
