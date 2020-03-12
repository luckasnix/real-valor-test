import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Home = lazy(() => import('./pages/home'))
const Dashboard = lazy(() => import('./pages/dashboard'))

export default () => {
  return (
    <Router>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}