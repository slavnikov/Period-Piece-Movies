import React from 'react';
import { dateRange } from '../../util/gen_util';

class PeriodSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
      filters: true,
    };
  }

  handleClick(min, max) {
    return () => {
      this.props.setLimits(min, max);
    };
  }

  renderList() {
    if (this.state.filters) {
      return (
        <ul>
          {
            Object.values(this.props.periodFilters).map((periodFilter, idx) => {
              return(
                <button
                  key={idx}
                  onClick={() => this.setState({periods: periodFilter.time_period_ids, filters: false})}>
                  <h6>{periodFilter.name}</h6>
                </button>
              );
            })
          }
        </ul>
      );
    } else {
      return (
        <ul>
          {
            this.state.periods.map((periodId, idx) => {
              const timePeriod = this.props.timePeriods[periodId];
              return (
                <button
                  key={idx}
                  onClick={this.handleClick(timePeriod.start_year, timePeriod.end_year)}>
                  <h6>{timePeriod.name} ({dateRange(timePeriod.start_year, timePeriod.end_year)})</h6>
                </button>
              );
            })
          }
        </ul>
      );
    }
  }

  render () {
    return (
      <div className='glass-pane' id='period-selector-wrapper'>
        <div className='glass-container flex-row' id='period-selector'>
          <button
            id='back-button'
            className={this.state.filters ? 'no-hover' : ''}
            onClick={() => this.setState({filters: true})}>
            {this.state.filters ? '' : <i className="fa fa-angle-double-left"></i>}
          </button>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default PeriodSelector;
