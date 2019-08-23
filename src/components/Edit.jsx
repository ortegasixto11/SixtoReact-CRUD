import React from 'react'
class EditTodo extends React.Component{

	constructor(){
		super()
		this.state = {

		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		e.preventDefault()
		this.props.history.push('/')
	}

	render(){
		return (
			<div>
				<h2> Edit </h2>
				<button onClick={this.handleClick}> Guardar </button>
			</div>
		)
	}

}

export default EditTodo