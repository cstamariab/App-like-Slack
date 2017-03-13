import React , { Component } from 'react'
import ReactDOM from 'react-dom'


import Channel from './Channel'
export default class Listings extends Component {
	constructor(props) {
	  super(props)
	}

	handleSubmitChannel(e){
		e.preventDefault()
		let channel = ReactDOM.findDOMNode(this.refs.inputChannel).value.trim()
		this.props.onCreateChannel(channel)
		ReactDOM.findDOMNode(this.refs.inputChannel).value = ''
	}

	render() {		
		let channels = this.props.channels.map(function (channel) {
			return(<Channel key={channel._id}  name={channel.channel} />)
		},this);
		return (
			<div>
				{channels}
				<form onSubmit={this.handleSubmitChannel.bind(this)}>
					<input type="text" ref="inputChannel" placeholder="nuevo canal" />
					<input type="submit" value="Nuevo Canal" />
				</form>		
			</div>
		)
	}	
}