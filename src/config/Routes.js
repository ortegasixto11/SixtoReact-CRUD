import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateTodo from '../components/Create.jsx'
import ListTodo from '../components/List.jsx'
import EditTodo from '../components/Edit.jsx'


function RoutesApp() {
	return (
		<Switch>
			<Route exact path="/" component={ListTodo} />
			<Route exact path="/create" component={CreateTodo} />
			<Route exact path="/edit/:id" component={EditTodo} />
    </Switch>
	);
    
}

export default RoutesApp