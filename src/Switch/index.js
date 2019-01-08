import React, { Component } from 'react';

import './style.scss';

export default class Switch extends Component {
  render() {
    const { on, className = '', ...rest } = this.props;
    const btnClassName = [
      className,
      'toggle-btn',
      on
        ? 'toggle-btn-on'
        : 'toggl-btn-of'
    ].filter(Boolean).join(' ');
    return (
      <>
        <input
          type="checkbox"
          className="toggle-input"
          checked={on}
          onChange={() => { }}
        />
        <button
          arial-label="Toggle"
          className={btnClassName}
          {...rest}
        />
      </>
    );
  }
}
