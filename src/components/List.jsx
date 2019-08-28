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
		this.getAll = this.getAll.bind(this)
	}

	componentDidMount(){
		this.getAll()
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

	getAll(){
		Service.getAll(this.state.ref)
			.then(data => this.loadData(data))
			.catch(err => console.log(err))
	}

	handleClickDelete(item_id){
		if(window.confirm('Eliminar Todo?')){
			Service.delete(this.state.ref, item_id)
			this.getAll()
		}
	}

	handleClickEdit(item_id){
		this.props.history.push(`/edit/${item_id}`)
	}

	render(){
		return (
			<div>
				<h1> List </h1>
				<Link to="/create">Crear Todo</Link>

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
								<td> 
									<button onClick={this.handleClickEdit.bind(this, item.id)}>Editar</button> &nbsp;
									<button onClick={this.handleClickDelete.bind(this, item.id)}>Eliminar</button> 
								</td>
							</tr>
						)}
					</tbody>
				</table>

			</div>
		)
	}

}

export default ListTodo