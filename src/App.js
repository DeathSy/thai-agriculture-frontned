import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'

function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback='...Loading please wait...'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
export default App
