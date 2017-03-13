import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import {Session} from 'meteor/session'
import classNames from 'classnames'
export default class Channel extends Component {
	constructor(props) {
	  super(props);
	}
	handleClick(){		
		let channel = ReactDOM.findDOMNode(this.refs.inputChannel).innerHTML
		Session.set('channel' , channel)
	}
	render() {
		let styleItem = classNames({
			'item': true ,
			'active': Session.get('channel') == this.props.name
		})
		return (
			<a className={styleItem} href="javascript:void(0)" onClick={this.handleClick.bind(this)} >
				<span>#</span>
				<span ref="inputChannel">{this.props.name}</span>
			</a>
		)
	}	
}