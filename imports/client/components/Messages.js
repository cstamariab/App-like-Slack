import React , { Component } from 'react'
import Message from './Message'
export default class Messages extends Component {
	render() {
		let message = {
			user: "Usuario",
			message: "EL mensaje"
		}
		return (
			<div>
				<Message user={message.user} message={message.message} />
				<Message user={message.user} message={message.message} />
			    <Message user={message.user} message={message.message} />
			</div>
		)
	}	
}