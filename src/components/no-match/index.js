import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export default function NoMatch() {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem('auth'),
  )
  const { status } = useSelector((state) => state.login)
  let location = useLocation()

  useEffect(() => {
    if (status) {
      setAuthenticated(status.result === 'ok')
    }
  }, [status])

  return (
    <div className="no-match">
      <h2>
        {authenticated ? (
          <Link to="/admin">Admin page</Link>
        ) : (
          <Link to="/">Beta page</Link>
        )}
      </h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
