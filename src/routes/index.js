import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import Beta from 'components/beta'
import Secret from 'components/secret'

const PublicRoute = ({ component, ...rest }) => {
  const routeComponent = (props) => React.createElement(component, props)
  return <Route {...rest} render={routeComponent} />
}

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) =>
    !isAuthenticated ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      React.createElement(component, props)
    )
  return <Route {...rest} render={routeComponent} />
}

function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth'),
  )
  const { response } = useSelector((state) => state.beta)
  const history = useHistory()

  useEffect(() => {
    if (response && response.success === 'ok') {
      setIsAuthenticated('auth')
    }
  }, [response, setIsAuthenticated])

  return (
    <Router>
      <Switch>
        <PublicRoute exact component={Beta} path="/" />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          component={Secret}
          path="/secret/home"
        />
        <PublicRoute component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default Routes
