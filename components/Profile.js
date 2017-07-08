import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


const Profile = () => (
    <Card style={{height:'100%', overflow:'hidden', position: 'relative'}}>
      <div style={{float:'left', height:'80%'}}>
          <img
            style={{width:'50%', margin:'2.5% 30% 4% 30%'}}
            src="https://www.acspri.org.au/sites/acspri.org.au/files/profile-placeholder.png" />
      </div>
      <div style={{display:'block'}}>
        <CardTitle
          title="Performer Name"
          subtitle="Actress"
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </div>
      <CardActions>
        <FlatButton label="PDF" />
        <FlatButton label="JPG" />
        <FlatButton label="Go To Website" />
      </CardActions>
    </Card>
  );

  //export default CardExampleWithAvatar;

export default Profile;
