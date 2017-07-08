import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin'
import {Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


//injectTapEventPlugin()

class Nav extends Component {

  render() {
    return (
        <Toolbar>
          <ToolbarTitle text="PerformancePal" />
  
          <ToolbarGroup>

            <RaisedButton
              label="Auditions"
              primary={true}
            />

            <RaisedButton
              label="Materials"
              primary={false}
            />

            <RaisedButton
              label="Network"
              primary={false}
            />

            <RaisedButton
              label="Goals"
              primary={false}
            />

            <RaisedButton
              label="Money"
              primary={false}
            />

          </ToolbarGroup>
        </Toolbar>
    )
  }
}

export default Nav;
