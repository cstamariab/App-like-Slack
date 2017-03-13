import React , { Component } from 'react'
import Message from './Message'
export default class Messages extends Component {
	render() {
		let messages = this.props.messages.map(function (message) {
			return(<Message key={message._id} user={message.user} message={message.message} />)
		});
		
		return (
			<div className="ui top attached segment">		
				{messages}
			</div>
		)
	}	
}