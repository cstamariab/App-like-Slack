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
		const padding = {
			padding:'2%',
			margin: '1%'
		}
		return (
			<div className="ui two column padded grid">			
				<div style={padding} className="teal row">	
					<form className="ui form" onSubmit={this.handleSubmitMessage.bind(this)}>
						<div className="ui huge icon input">
							<input ref="inputMessage" type="text" placeholder="Nuevo mensaje"/>
							<i className="send outline icon"></i>
						</div>					
					</form>
				</div>
			</div>
		)
	}	
}