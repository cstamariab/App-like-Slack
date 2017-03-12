'use strict'
import React  from 'react'
import ReacDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
//Import Components
import CommentList from '../imports/client/containers/commentList'

Meteor.startup(() => {
	ReacDOM.render(<CommentList /> , document.getElementById('container'))
})