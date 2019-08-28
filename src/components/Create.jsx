import React from 'react'
import Service from '../services/firebaseService'

class CreateTodo extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      ref : 'todos',
      form : {
        name: '',
        date: '',
        completed: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
  }

  handleChange(e){
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    Service.create(this.state.ref, this.state.form)
    this.props.history.push('/')
  }

  handleClickBack(){
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2> Crear Tarea </h2>
          <br />

          <div>
            <label> Nombre </label>
            <input type="text" name="name" onChange={this.handleChange} autoFocus="autofocus" />
            <br />
          </div>

          <div>
            <label> Fecha </label>
            <input type="date" name="date" onChange={this.handleChange} />
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
export default CreateTodo