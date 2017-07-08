import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import injectTapEventPlugin from 'react-tap-event-plugin'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import AuditionJournal from '../components/AuditionJournal'

//injectTapEventPlugin()

class Home extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Nav />
        <Profile/>
        <br />
        <AuditionJournal />
      </div>
      </ MuiThemeProvider>
    )
  }
}

export default Home;
