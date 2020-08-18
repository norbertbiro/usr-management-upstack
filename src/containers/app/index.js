import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import User from '../user'

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/user/:id" render={(props) => <User {...props} />} />
  </main>
)

export default App
