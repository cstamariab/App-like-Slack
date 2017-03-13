import React , { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div>
				<form >
					<input ref="inputMessage" type="text" placeholder="Footer message"/>
				</form>
			</div>
		)
	}	
}