import React from 'react';

import Switch from './Switch';

class Toggle extends React.Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  //static Button = ({ on, toggle, ...rest }) => <Switch on={on} onClick={toggle} {...rest} />;
  static Button = (props) => <Switch {...props} />;

  state = { on: false };

  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    return (
      React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          on: this.state.on,
          onClick: this.toggle,
        })
      }

      )
    )
  }
}

function Usage() {
  return (
    <Toggle>
      <Toggle.On>Button is on</Toggle.On>
      <Toggle.Off>Button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

export default Usage;
