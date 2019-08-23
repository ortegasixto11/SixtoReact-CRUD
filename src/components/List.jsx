import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../services/firebaseService'

class ListTodo extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			ref: 'todos',
			todos: []
		}

		this.loadData = this.loadData.bind(this)
	}

	componentDidMount(){
		Service.getAll(this.state.ref)
			.then(data => this.loadData(data))
			.catch(err => console.log(err))
	}

	loadData(data){
		let _todos = []
		this.setState({ todos: [] })
		for (let index in data) {
			_todos.push({
				id: index,
				completed: data[index].completed,
				date: data[index].date,
				name: data[index].name
			})
		}
		this.setState({ todos: _todos })
	}


	render(){
		return (
			<div>
				<h1> List </h1>
				<Link to="/create">Crear</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/edit">Editar</Link>


				<br /> <br />
				<table border="1" cellPadding="10">
					<thead>
						<tr>
							<th> Nombre </th>
							<th> Fecha </th>
							<th> Completado </th>
							<th> Actions </th>
						</tr>
					</thead>
					<tbody>
						{this.state.todos.map(item => 
							<tr key={item.id}>
								<td>{ item.name }</td>
								<td>{ item.date }</td>
								<td>{ item.completed }</td>
								<td>{ item.name }</td>
							</tr>
						)}

					</tbody>
				</table>

			</div>
		)
	}

}

export default ListTodo