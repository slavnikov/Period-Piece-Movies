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
    this.setState({[e.currentTarget.id]: e.pageX - 45});
  }

  draggableLocation(slider) {
    return ({
      left: this.state[slider],
    });
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
              onDragEnd={this.drag.bind(this)}
              style={this.draggableLocation('slider1')}>
            </div>
            <div
              id='slider2'
              draggable='true'
              onDrag={this.drag.bind(this)}
              onDragEnd={this.drag.bind(this)}
              style={this.draggableLocation('slider2')}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
