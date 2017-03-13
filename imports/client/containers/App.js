import React , { Component , PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import AccountsUiWrapper from '../components/accountsUiWrapper'
import Header from '../components/Header'
import Listings from '../components/Listings'
import ProfileModal from '../components/ProfileModal'
import Footer from '../components/Footer'

import {MessageCollection} from '../../collections/messages'
import {ChannelsCollection} from '../../collections/channels'

class App extends Component {
	render() {
		return (
			<div>
				<AccountsUiWrapper />
				<Header />				
				<Listings />
				<ProfileModal />
				<Footer />
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
		messages: MessageCollection.find({}).fetch(),
		channels: ChannelsCollection.find({}).fetch(),
        currentUser: Meteor.user()
	}
}, App) 