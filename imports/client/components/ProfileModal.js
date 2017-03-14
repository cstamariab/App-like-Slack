import React , { Component } from 'react'
import  $ from 'jquery'
import ReactDOM from 'react-dom'

export default class ProfileModal extends Component {
	componentDidMount() {
		const modalUser = ReactDOM.findDOMNode(this.refs.userModal)
		$(modalUser).modal()
	}
	handleChange(){
		
		const imageView = ReactDOM.findDOMNode(this.refs.imageView)
		const fileEle = ReactDOM.findDOMNode(this.refs.pic)
		const imagePath = fileEle.files[0]
		const reader = new FileReader()		

		const _this = this

		reader.onload = function(fileload){	

			imageView.src = reader.result
			_this.props.onInsertImage(imagePath.name , reader.result)
		}

		reader.readAsDataURL(imagePath)

	}
	render() {
		return (
			<div ref="userModal" className="ui modal">
				<h1>{this.props.user}</h1>
				<img ref='imageView' src="/images/react-logo.png" alt="React Logo"/>
				<input onChange={this.handleChange.bind(this)} type="file" ref='pic'  accept="image/-xpng" />
			</div>
		)
	}	
}