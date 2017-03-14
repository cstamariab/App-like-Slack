import React , { Component } from 'react'

export default class Message extends Component {

	render() {
		const imageSize = {
			width: '5%',
			marginRight:'2%'
		}
		return (
			<div className="ui olive icon message ">
				<img style={imageSize} src={this.props.userImg} />
				<div className="content">
					<div className="header">
						<h2>{this.props.user}</h2>					
					</div>
					<p>{this.props.message}</p>
				</div>
			</div>
		)
	}	
}