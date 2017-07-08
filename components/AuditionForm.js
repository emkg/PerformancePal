//template
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'

class AuditionForm extends Component {
  render () {
    return (
      <div>
      <TextField
        hintText="Show"
        multiLine={false}
        rows={1}
        fullWidth={false}
      />
      <TextField
        hintText="Part"
        multiLine={false}
        rows={1}
        fullWidth={false}
      />
      <TextField
        hintText="Location"
        multiLine={false}
        rows={1}
        fullWidth={false}
      />
      <DatePicker
        hintText='Date'
        container='inline'
        mode='landscape'
      />
      <TimePicker
        hintText='Time'
      />
      <TextField
        hintText='Material'
      />
      <RaisedButton primary={true} label="Add Audition" fullWidth={true} />
      </div>
    )
  }
}

export default AuditionForm;
