import React , { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends Component {
	handleSubmitMessage(e){
		e.preventDefault()
		let message = ReactDOM.findDOMNode(this.refs.inputMessage).value.trim()
		this.props.onSendMessage(message)

		ReactDOM.findDOMNode(this.refs.inputMessage).value = ''
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmitMessage.bind(this)}>
					<input ref="inputMessage" type="text" placeholder="Footer message"/>
					<input type="submit" value="Nuevo mensaje" />
				</form>
			</div>
		)
	}	
}