import React from 'react';

class PeriodSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(min, max) {
    return () => {
      this.props.setLimits(min, max);
    };
  }

  render () {
    return (
      <div className='glass-pane'>
        <div className='glass-container flex-column-center select-wrapper'>
          <h2>Refine Timeline</h2>
          <ul className='period-select'>
            <li onClick={this.handleClick(-2000, 0)}>BC (2000BC - 0AD)</li>
            <li onClick={this.handleClick(0, 2000)}>AD (0AD - 2000AD)</li>
            <li onClick={this.handleClick(1800, 2000)}>Modern (1800AD - 2000AD)</li>
            <li onClick={this.handleClick(400, 1453)}>Middle Ages (400AD - 1453AD)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PeriodSelector;
