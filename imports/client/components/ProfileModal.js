import React , { Component } from 'react'
import  $ from 'jquery'
import ReactDOM from 'react-dom'

export default class ProfileModal extends Component {
	componentDidMount() {
		const modalUser = ReactDOM.findDOMNode(this.refs.userModal)
		$(modalUser).modal()
	}
	render() {
		return (
			<div ref="userModal" className="ui modal">
				<h1>{this.props.user}</h1>
				<img src="/images/react-logo.png" alt="React Logo"/>
			</div>
		)
	}	
}