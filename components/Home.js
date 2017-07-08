import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'


injectTapEventPlugin()

class Home extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <RaisedButton
          label={'Test Button'}
          primary={true}
          onTouchTap={()=>{console.log('hello')}}
        />
        </div>
      </MuiThemeProvider>
    )
  }
}
