import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Logado = lazy(() => import('../pages/logado'))

const Fallback = () => <h1>Carregando...</h1>

const Routes = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/logado' component={Logado} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
