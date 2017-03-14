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
				<div className="channels__channel-list ui bottom attached tabular menu">
					{channels}					
				</div>
				<div className="right menu">
					<form className="ui form" onSubmit={this.handleSubmitChannel.bind(this)}>
						<input type="text" ref="inputChannel" placeholder="nuevo canal" />							
					</form>		
				</div>
			</div>
		)
	}	
}