import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { check }  from 'meteor/check'

export const ChannelsCollection = new Mongo.Collection('channels')

// meteor remove inseecure autopublish
if (Meteor.isServer) {
	Meteor.publish('channels' , function(){
		return (ChannelsCollection.find({}))
	})
}
Meteor.methods({
	'channel.insert'(channel) {
		check(channel , String)

		if (!this.userId)
			throw new Meteor.Error('no autorizado')
		
		ChannelsCollection.insert({
			channel
		})
	}
});