//template
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import AuditionForm from '../components/AuditionForm'

class AuditionJournal extends Component {
  render() {
    return (
      <div>
      <p style={{textAlign:'center', fontFamily:'sans-serif'}}> Audition Journal </p>
      <div style={{display: 'flex', alignItems: 'flex-start'}}>
        <Card style={{width:'20%'}}>
          <CardHeader
            title="Past Auditions"
          />
        </Card>


        <Card style={{width:'30%',
          border: 'solid brown 5px',
          borderRight:'0px',
          paddingBottom:'12px',
          marginLeft:'5px'}}
        >
          <AuditionForm/>
        </Card>
        <Card style={{width:'30%',
          border:'solid brown 5px',
          borderLeft:'0px',
          marginRight:'5px'}}>
          <TextField
            hintText="Write here"
            multiLine={true}
            rows={13}
            fullWidth={true}
          />
        </Card>

        <Card style={{width:'20%'}}>
          <CardHeader
            title="Upcoming Auditions"
          />
        </Card>

      </div>
      </div>
    )
  }
}

export default AuditionJournal;
