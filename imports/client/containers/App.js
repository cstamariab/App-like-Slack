import React , { Component , PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {Session} from 'meteor/session'

import AccountsUiWrapper from '../components/accountsUiWrapper'
import Header from '../components/Header'
import Listings from '../components/Listings'
import Messages from '../components/Messages'
import ProfileModal from '../components/ProfileModal'
import Footer from '../components/Footer'

import {MessageCollection} from '../../collections/messages'
import {ChannelsCollection} from '../../collections/channels'

class App extends Component {
	constructor() {
	  super();	
	  Session.set('channel', 'ReactJs')
	}
	sendMessage(message){
		Meteor.call('message.insert' , message , Session.get('channel'))
	}
	createChannel(channel){
		Meteor.call('channel.insert', channel)
	}

	render() {

		return (
			<div className="ui container">
				<AccountsUiWrapper />
				{ this.props.currentUser ? 
					<div>				
						<Header />
						<Messages messages={this.props.messages}/>			
						<Listings 
						onCreateChannel={this.createChannel.bind(this)}							
						channels={this.props.channels}/> 						
						<Footer onSendMessage={this.sendMessage.bind(this)} />
						<ProfileModal />
					</div>
					: ''
				}
			</div>
		)
	}	
}

App.propTypes = {
	messages: PropTypes.array.isRequired,
	channels: PropTypes.array.isRequired,
	currentUser: PropTypes.object
}

export default createContainer(()=>{
  Meteor.subscribe('messages')
  Meteor.subscribe('channels')
	return {
		messages: MessageCollection.find({channel: Session.get('channel')}).fetch(),
		channels: ChannelsCollection.find({}).fetch(),
        currentUser: Meteor.user()
	}
}, App) 