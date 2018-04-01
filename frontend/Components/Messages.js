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




class Messages extends Component 
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }
  scrollToBottom() 
  {
  	l('scrollToBottom', this.end.scrollIntoView)
  this.end.scrollIntoView({ behavior: "smooth" })
  }

	componentDidMount() 
	{
		l('componentDidMount')
	  this.scrollToBottom()
	}

	componentDidUpdate() 
	{
		l('componentDidUpdate')
	  this.scrollToBottom()
	}
  render() 
  {
  	var {loading, error, messages} = this.props.data
  	l(this.props.data)
    return (
    	<div>
    		{loading && <ListItem> <CircularProgress /> </ListItem>}
    		{error && <ListItem primaryText='Error' secondaryText={error.message} />}
    		{messages && messages.map( ({text, id, user}) => <ListItem key = {id} primaryText={text} secondaryText={user ? user.name : 'Server'} />)}
    		<div style={{ float:"left", clear: "both" }} ref = {ref => this.end = ref} /> 					
    	</div>
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

 const ApolloMessages = graphql(messagesListQuery, {options: { pollInterval: 1000 }})(Messages)

 export default ApolloMessages