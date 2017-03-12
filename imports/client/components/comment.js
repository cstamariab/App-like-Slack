import React , { PropTypes } from 'react'

import { Meteor } from 'meteor/meteor'

export default class Comment  extends React.Component {
	constructor() {
	  super();	 
	}
	render() {
		return (
			<h4>{this.props.comment}</h4>
		)
	}
}