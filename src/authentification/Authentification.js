import React, { useState } from 'react'
import LoginForms from './loginForms'

const Authentification = (props) => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({ name: ' ', email: ' ' })
  const [error, setError] = useState(' ')

  const login = (details) => {
    console.log(details)
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('logged in')
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log('details do not match')
      setError('details do not match')
    }
  }

  const logout = () => {
    console.log('log Out')
    setUser({ name: ' ', email: ' ' })
  }

  return (
    <div className="auth">
      {user.email !== ' ' ? (
        <div className="welcome">
          <h2>
            Welcome <span>{user.name}</span>
          </h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForms login={login} error={error} />
      )}
    </div>
  )
}

export default Authentification
