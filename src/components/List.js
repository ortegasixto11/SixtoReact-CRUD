import React from 'react'
import { Link } from 'react-router-dom'
class ListTodo extends React.Component{

	constructor(){
		super()
		this.state = {

		}
	}

	render(){
		return (
			<div>
				<h1> List </h1>
				<Link to="/create">Crear</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/edit">Editar</Link>
			</div>
		)
	}

}

export default ListTodo