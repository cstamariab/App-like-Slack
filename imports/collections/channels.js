import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const ChannelsCollection = new Mongo.Collection('channels')

// meteor remove inseecure autopublish
if (Meteor.isServer) {
	Meteor.publish('channels' , function(){
		return (ChannelsCollection.find({}))
	})
}