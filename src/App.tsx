import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DataProvider from './state/data/provider'
import { GlobalStyles } from './components/global/styled'

const Home = lazy(() => import('./pages/home'))
const Config = lazy(() => import('./pages/config'))
const Dashboard = lazy(() => import('./pages/dashboard'))

export default () => {
  return (
    <DataProvider>
      <GlobalStyles/>
      <Router>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/config/:asset'>
              <Config/>
            </Route>
            <Route path='/dashboard'>
              <Dashboard/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </DataProvider>
  )
}