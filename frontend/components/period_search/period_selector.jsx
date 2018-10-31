import React from 'react';

class PeriodSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
    };
  }

  handleClick(min, max) {
    return () => {
      this.props.setLimits(min, max);
    };
  }

  render () {
    return (
      <div className='glass-pane' id='period-selector-wrapper'>
        <div className='glass-container flex-row' id='period-selector'>
          <h5 className='vertical-text'>filters</h5>
          <ul>
            {
              Object.values(this.props.periodFilters).map((periodFilter) => {
                return(
                  <button
                    onClick={() => this.setState({periods: periodFilter.time_period_ids})}>
                    <h6>{periodFilter.name}</h6>
                  </button>
                );
              })
            }
          </ul>
          <ul>
            {
              this.state.periods.map((periodId) => {
                const timePeriod = this.props.timePeriods[periodId];
                return (
                  <button
                    onClick={this.handleClick(timePeriod.start_year, timePeriod.end_year)}>
                    <h6>{timePeriod.name} ({timePeriod.start_year} - {timePeriod.end_year})</h6>
                  </button>
                );
              })
            }
          </ul>
          <h5 className='vertical-text'>periods</h5>
        </div>
      </div>
    );
  }
}

export default PeriodSelector;
