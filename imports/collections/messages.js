import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const MessageCollection = new Mongo.Collection('messages')

// meteor remove inseecure autopublish
if (Meteor.isServer) {
	Meteor.publish('messages' , function(){
		return (MessageCollection.find({}))
	})
}