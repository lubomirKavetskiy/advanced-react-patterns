import React from 'react';

import Switch from './Switch';

const ToggleContext = React.createContext();

//to sure that context does exist we use validation
function ToggleConsumer(props) {
  return (
    <ToggleContext.Consumer>
      {context => {
        if (!context) throw new Error(
          'Toggle-consumer of compoud compnents must be always rendered within the Toggle-provider'
        );
        console.log(props.children); //({ on }) => on ? children : null
        console.log(context); //{on: false, onClick: f()}
        return props.children(context);
      }}
    </ToggleContext.Consumer>
  );
}

class Toggle extends React.Component {
  //static On = ({ children }) => <ToggleConsumer>{context => context.on ? children : null}</ToggleConsumer>;
  static On = ({ children }) => <ToggleConsumer>{({ on }) => on ? children : null}</ToggleConsumer>;
  static Off = ({ children }) => <ToggleConsumer>{({ on }) => on ? null : children}</ToggleConsumer>;
  static Button = () => <ToggleConsumer>{props => <Switch {...props} />}</ToggleConsumer>;

  state = { on: false };

  toggle = () => this.setState(({ on }) => ({ on: !on }));

  render() {
    return (
      <ToggleContext.Provider
        value={
          {
            on: this.state.on,
            onClick: this.toggle,
          }
        }>
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

function Usage() {
  return (
    //if use <div> instead of <Toggle> (Toggle-provider) we will not pass context, so it will be throw Error
    <Toggle>
      <Toggle.On>Button is on</Toggle.On>
      <Toggle.Off>Button is off</Toggle.Off>
      <div>
        <div>
          <div>
            <div>
              <div>
                <Toggle.Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Toggle>
  );
}

export default Usage;
