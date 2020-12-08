import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import Beta from 'components/beta'
import Secret from 'components/secret'
import { onLogOutAction } from 'actions/logout'

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
  const dispatch = useDispatch()

  useEffect(() => {
    if (response && response.success === 'ok') {
      setIsAuthenticated('auth')
    }
  }, [response, setIsAuthenticated])

  useEffect(() => {
    window.addEventListener('storage', () => {
      if (!localStorage.getItem('auth')) {
        dispatch(onLogOutAction())
        setIsAuthenticated(false)
      }
    })
  }, [isAuthenticated, setIsAuthenticated, dispatch])

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
