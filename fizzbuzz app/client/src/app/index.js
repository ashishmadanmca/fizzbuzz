import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GetFizzBuzz } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        //React routes
        <Router>
            <Switch>
                <Route path="/" exact component={GetFizzBuzz} />
            </Switch>
        </Router>
    )
}
export default App