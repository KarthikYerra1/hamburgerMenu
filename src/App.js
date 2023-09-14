import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="bg-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </div>
)

export default App
