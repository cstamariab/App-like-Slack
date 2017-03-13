import React , { Component } from 'react'

export default class Channel extends Component {
	render() {
		return (
			<a>
				<span>#</span>
				<span>{this.props.name}</span>
			</a>
		)
	}	
}