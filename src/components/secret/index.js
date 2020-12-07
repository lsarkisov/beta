import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { onLogOutAction } from 'actions/logout'

function Secret() {
  const history = useHistory()
  const dispatch = useDispatch()

  const onClick = () => {
    history.push('/')
    localStorage.removeItem('auth')
    dispatch(onLogOutAction())
  }

  return (
    <section className="secret">
      <header>
        <button onClick={onClick} className="btn btn-outline-success my-2 my-sm-0" type="text">
          log out
        </button>
      </header>

      <main role="main" className="container">
        <h1 className="mt-5">You are in secret zone! ;)</h1>
      </main>

      <footer>
        <section className="container">&copy; All rights reserved.</section>
      </footer>
    </section>
  )
}

export default Secret
