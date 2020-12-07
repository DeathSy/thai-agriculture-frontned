import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import Authprovider from './contexts/ActionContext'

function App () {
  return (
    <Authprovider>
    {/* <GlobalStyle /> */}
      <Router>
        <Suspense fallback='...Loading please wait...'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </Authprovider>
  )
}

export default App
