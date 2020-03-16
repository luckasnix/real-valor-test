import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DataProvider from './state/data/provider'
import { GlobalStyles } from './components/global/styled'
import Loader from './components/loader'

const Home = lazy(() => import('./pages/home'))
const Bitcoin = lazy(() => import('./pages/bitcoin'))
const Treasure = lazy(() => import('./pages/treasure'))
const Dashboard = lazy(() => import('./pages/dashboard'))

export default () => {
  return (
    <DataProvider>
      <GlobalStyles/>
      <Router>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/bitcoin'>
              <Bitcoin/>
            </Route>
            <Route path='/treasure'>
              <Treasure/>
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