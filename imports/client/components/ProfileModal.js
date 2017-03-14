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
		let url_photo
		if(Meteor.user().profile !=undefined){
			url_photo = Meteor.user().profile.url_photo
		}else{
			url_photo = '/images/react-logo.png'
		}

		return (
			<div ref="userModal" className="ui modal">
				<i className="close icon"></i>
				<div className="header">
					<h1>{this.props.user}</h1>
				</div>
				<div className="image content">
					<div className="ui medium image">
						<img ref='imageView' src={url_photo} alt="React Logo"/>
					</div>							
					<div className="description">
						<div className="ui header">
							Foto de Perfil
						</div>
						<p>Actualiza tu imagen en tiempo real..</p>									
						<form className='ui form'>
							<div className="field" >
								<input onChange={this.handleChange.bind(this)} type="file" ref='pic'  accept="image/-xpng" />		
							</div>
						</form>
					</div>
				</div>	
			</div>
		)
	}	
}