import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import RaisedButton from 'material-ui/RaisedButton'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import AppBar from 'material-ui/AppBar';

import ApolloMessages from './Messages'
import ApolloMessageSender from './MessageSender'

let l = console.log


class Messenger extends Component {
  constructor(props)
  {
    super(props)
    this.state = {username: '', logedIn: false}
  }
  render() 
  {
    return(
    	<div>
	    	<AppBar
	          title="Apollo + GraphQL Chat"
	          iconClassNameRight="muidocs-icon-navigation-expand-more"
	          onLeftIconButtonClick={ _ => this.setState({drawer: !drawer})}
	        />
	    	<div className="container">
				<div className="row">
					<div className="col-3" />
					<div className="col-6">
						<Card initiallyExpanded={true}>
						    
						    <CardText expandable = {true}>
						    	
									<List>
										
										<div style = {{maxHeight: 300, overflow: 'scroll'}}>
											<ApolloMessages />
											
										</div>
										<Divider/>
										<ApolloMessageSender user = {this.state.username} logedIn = {this.state.logedIn}/>
										
							    	</List>
						    		


					    	</CardText>
				    	</Card>
				    	<br/>
				    	<br/>
				    	<Card initiallyExpanded={true}>
					    	<CardHeader
					    			subtitle = 'User'				    
							      actAsExpander={true}
								  showExpandableButton={true}
							    />
					    	<CardText expandable = {true}>
					    		<TextField disabled = {this.state.logedIn} style = {{width: '90%'}}hintText="User name" value = {this.state.username} onChange = {(e, value) => this.setState({username: value})}/>
							    <RaisedButton label={this.state.logedIn ? 'Log Out' : 'Log In'} onClick = {_ => this.setState({logedIn: !this.state.logedIn})}/>
					    	</CardText>
				    	</Card>
					</div>
					<div className="col-3" />
				</div>
			</div>
		</div>
      )
  }
}



export default Messenger
	