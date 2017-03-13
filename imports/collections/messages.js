import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { check }  from 'meteor/check'

export const MessageCollection = new Mongo.Collection('messages')

// meteor remove inseecure autopublish
if (Meteor.isServer) {
	Meteor.publish('messages' , function(){
		return (MessageCollection.find({}))
	})
}
Meteor.methods({
	'message.insert'(message,channel) {
		check(message , String)

		MessageCollection.insert({
			user: Meteor.users.findOne(this.userId).username ,
			message,
			channel
		})
	}
});