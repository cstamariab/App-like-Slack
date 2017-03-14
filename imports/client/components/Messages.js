import React , { Component } from 'react'
import Message from './Message'
export default class Messages extends Component {
	render() {
		let messages = this.props.messages.map(function (message) {
			return(<Message key={message._id} userImg={message.userImg} user={message.user} message={message.message} />)
		});
		
		return (
			<div className="messages__message-list  ui top attached segment">		
				{messages}
			</div>
		)
	}	
}