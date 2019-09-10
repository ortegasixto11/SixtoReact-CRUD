import React from 'react'
import Service from '../services/firebaseService'

class EditTodo extends React.Component{

	constructor(){
		super()
		this.state = {
			ref: 'todos',
			form : {
				id: '',
        name: '',
        date: '',
        completed: false
      }
		}
		this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
    this.validateCheckbox = this.validateCheckbox.bind(this)
		this.getTodo = this.getTodo.bind(this)
	}

	componentDidMount(){
		// Busco el Todo en la BD
		Service.get(this.state.ref, this.props.match.params.id)
			.then(data => this.getTodo(data, this.props.match.params.id))
      .catch(err => console.log(err))
	}

	getTodo(item, id){
		this.setState({
			ref: this.state.ref,
			form: {
				name: item.name,
				date: item.date,
				completed: item.completed,
				id: id
			}
    })
    this.validateCheckbox()
	}

	handleSubmit(e){
    e.preventDefault();
		Service.update(this.state.ref, this.state.form.id, this.state.form)
			.then(res => { this.props.history.push('/') })
			.catch(err => console.log(err))
  }

	handleChange(e){
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
	}
	
	handleClickBack(){
    this.props.history.push('/')
  }

  validateCheckbox(){
    document.getElementById('completed').checked = this.state.form.completed
  }

	render(){
		return (
			<div>
        <form onSubmit={this.handleSubmit}>
          <h2> Edkitar Tarea </h2>
          <br />

          <div>
            <label> Nombre </label>
            <input type="text" name="name" onChange={this.handleChange} autoFocus="autofocus" value={this.state.form.name} />
            <br />
          </div>

          <div>
            <label> Fecha </label>
            <input type="date" name="date" onChange={this.handleChange} value={this.state.form.date} />
            <br />
          </div>

					<div>
            <label> Completada </label>
            <input type="checkbox" id="completed" name="completed" onChange={this.handleChange} defaultChecked={this.state.form.completed} />
            <br />
          </div>

          <br />
          <div>
            <button type="submit"> Guardar </button> &nbsp; &nbsp;
            <button type="button" onClick={this.handleClickBack}> Regresar </button>
          </div>
        </form>
      </div>
		)
	}

}

export default EditTodo