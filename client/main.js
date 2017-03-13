'use strict'
import React  from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
//Import Components
import App from '../imports/client/containers/App'

import '../imports/startup/accounts-ui'
Meteor.startup(() => {
	ReactDOM.render(<App /> , document.getElementById('container'))
})