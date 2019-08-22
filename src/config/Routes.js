import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateTodo from '../components/Create'
import ListTodo from '../components/List'
import EditTodo from '../components/Edit'


function RoutesApp() {
	return (
		<Switch>
			<Route exact path="/" component={ListTodo} />
			<Route exact path="/create" component={CreateTodo} />
			<Route exact path="/edit" component={EditTodo} />
    </Switch>
	);
    
}

export default RoutesApp