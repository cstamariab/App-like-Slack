import React , { Component } from 'react'

export default class Message extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.user}</h2>
				<p>{this.props.message}</p>
			</div>
		)
	}	
}