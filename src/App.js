import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import Authprovider from './contexts/ActionContext'
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './components/GlobalStyle'

function App () {
  return (
    <Authprovider>
      <Navbar />
      <GlobalStyle />
      <Router>
        <Suspense fallback='...Loading please wait...'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route data-testid='routes' key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </Authprovider>
  )
}
export default App
