import React , { Component } from 'react'
import Channel from './Channel'
export default class Listings extends Component {
	render() {
		let channel_name = "channel"
		return (
			<div>
				<Channel name={channel_name} />
				<Channel name={channel_name} />
				<Channel name={channel_name} />				
			</div>
		)
	}	
}