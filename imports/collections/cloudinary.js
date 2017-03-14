const fs = require('fs')
const path = require('path')
const cloudinary = require('cloudinary')
const async = require('async')

import { Meteor } from 'meteor/meteor'

cloudinary.config({
	cloud_name: 'apicloud',
	api_key: '638723686949532',
	api_secret: 'a7GMN_QNg6j2yHDbfDjVdPDgt1I'
})

Meteor.methods({
	cloudinary_insert(fileInfo , fileData) {
		
		const base64 = fileData.replace(/^data:image\/png;base64,/,"")
		const fileName = this.userId + ".png"
		const userToUpdate = Meteor.users.findOne({_id: this.userId})
		

		const asyncFunc = Meteor.wrapAsync(async.waterfall)
		const resAsyncFunc = asyncFunc([
			function (callback) {
				fs.writeFile(fileName , base64 , 'base64' , (err) => {
					if(err){
						callback(err)
					}

					const filePath = path.join(process.cwd(), fileName)
					callback(null,filePath)
				})
			},
			function (arg1, callback){
				console.log(arg1)
					// argu1 toma el valor dell callback anterior
				cloudinary.uploader.upload(arg1, function(result){	
					if(!result){
						callback(new Meteor.error())
					}

					callback(null, result)
				}, { public_id: this.userId , format: 'jpg'})
			}
		])

		console.log(resAsyncFunc)
		Meteor.users.update(userToUpdate, {$set: {"profile.url_photo" : resAsyncFunc.url}})

		return resAsyncFunc
	}
})