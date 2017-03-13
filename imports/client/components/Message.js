import React , { Component } from 'react'

export default class Message extends Component {
	render() {
		return (
			<div className="ui olive message ">
				<div className="header">
					<h2>{this.props.user}</h2>
				</div>
				<p>{this.props.message}</p>
			</div>
		)
	}	
}