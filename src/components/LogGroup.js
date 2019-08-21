import React, { Component } from 'react';
import { render, Color } from 'ink';
import Spinner from 'ink-spinner';

export default class LogGroup extends Component {
  isLogRecent(logs) {
      const sorted = logs && logs.sort((a,b)=> b.timestamp - a.timestamp)
      const time = sorted && sorted[0] && sorted[0].timestamp;

      return time && Math.abs(Date.now() - time) < 15000000;
  }

  render() {
    return (
      <>
        {this.props.logGroup && (
          <div
            style={{ display: 'flex', flexDirection: 'row' }}
            key={this.props.logGroup.arn}
          >
            <>
              <Color green>
                <Spinner type="dots" />
              </Color>
            </>
            {this.isLogRecent(this.props.logs) ? (
              <Color green>
                <div>{`  ${this.props.logGroup.logGroupName}`}</div>
              </Color>
            ) : (
              <Color red>
                <div>{`  ${this.props.logGroup.logGroupName}`}</div>
              </Color>
            )}
          </div>
        )}
      </>
    );
  }
}