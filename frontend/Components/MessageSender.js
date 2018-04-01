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

let l = console.log


class MessageSender extends Component {
  constructor(props)
  {
    super(props)
    this.state = {textValue: ''}
  }
  render() 
  {
  	var {mutate, user, logedIn} = this.props
  	var {textValue} = this.state
    return(
    	<ListItem disabled = {true} >
			<TextField disabled = {!logedIn || user == ''} style = {{width: '90%'}} hintText={user ? "Type Message as "+user : "Type Message"} value = {textValue} onChange = {(e, value) => this.setState({textValue: value})}/>
			<FloatingActionButton mini = {true} onClick = { _ => {
				if(textValue)
				{
					mutate({
						variables: {text: textValue, user},
						refetchQueries: [{query: messagesListQuery}]
					})
					this.setState({textValue: ''})
				}
			}}>
		    	<i className="material-icons">send</i>
		    </FloatingActionButton>
		</ListItem>
      )
  }
}

const messagesListQuery = gql`
   query MessagesQuery {
     messages {
       id
       text
       user{
       	name
       }
     }
   }
 `
const messageSenderMutation = gql`
mutation messageSenderMutation($text: String!, $user: String)
{
 sendMessage(text: $text, user: $user)
 {
   id
   text
 }
}
`
const ApolloMessageSender = graphql(messageSenderMutation)(MessageSender)

export default ApolloMessageSender