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

		let url_photo
		if (Meteor.users.findOne(this.userId).profile != undefined) {
			url_photo = Meteor.users.findOne(this.userId).profile.url_photo
		}else{
			url_photo = '/images/react-logo.png'
		}
		MessageCollection.insert({
			user: Meteor.users.findOne(this.userId).username ,
			userId: this.userId,
			userImg : url_photo,
			message,
			channel
		})
	},
	'message.update'(url){
		check(url , String)
		if (!this.userId) {
			throw new Meteor.Error()
		}
		MessageCollection.update({userId: this.userId}, {$set: {userImg:url}}, {multi:true})
	}

});