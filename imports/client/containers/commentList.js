import React , { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

import { createContainer } from 'meteor/react-meteor-data'

import Comment from '../components/comment'
import AccountsUiWrapper from '../components/accountsUiWrapper'

import { CommentsCollection } from '../../collections/comments'

class CommentList extends React.Component {

  handleSubmit(e){
    e.preventDefault()
    let comment = ReactDOM.findDOMNode(this.refs.textInput).value

    Meteor.call('comments.insert', comment)    
  }
	render() {

		let commentList = this.props.comments.map((comment) => {
			return(<Comment key={comment._id} comment={comment.comment} />)
		});
		return (
			<div>       
         <AccountsUiWrapper /> 
         {
          this.props.currentUser ?
          <div>
             <form onSubmit={this.handleSubmit.bind(this)} action="">
               <input ref='textInput' type="text"/>
               <input type="submit" value="Guardar" />
             </form>
             { commentList }
          </div>
           : '' 
         }  
			   
         
				
			</div>
		)
	}
}
CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  currentUser: PropTypes.object
}
export default createContainer(()=>{
  Meteor.subscribe('comments')
	return {
		comments: CommentsCollection.find({}).fetch(), //fetch suscribe a la lista
    currentUser: Meteor.user()
	}
}, CommentList) 