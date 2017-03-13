import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import {Session} from 'meteor/session'
export default class Channel extends Component {
	constructor(props) {
	  super(props);
	}
	handleClick(){		
		let channel = ReactDOM.findDOMNode(this.refs.inputChannel).innerHTML
		Session.set('channel' , channel)
	}
	render() {
		return (
			<a href="javascript:void(0)" onClick={this.handleClick.bind(this)} >
				<span>#</span>
				<span ref="inputChannel">{this.props.name}</span>
			</a>
		)
	}	
}