import firebase from 'firebase/app'
import React from 'react'

import '~/assets/css/navbar/navbar.css'
import logo from '~/assets/img/logo.png'
import { Signout } from '~/components/Signout'
import { Threads } from '~/components/header/Threads'

export const NavBar = (props: {
  firestore: firebase.firestore.Firestore
  user: firebase.User | null | undefined
  auth: firebase.auth.Auth
}) => {
  const { firestore, user, auth } = props
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="logo" />
        <div className="buttons">
          {user && <Threads firestore={firestore} />}
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            {user && (
              <h4>
                Welcome back, <strong>{user.displayName}!</strong>
              </h4>
            )}
          </div>
          <div className="navbar-item">{user && <Signout auth={auth} />}</div>
        </div>
      </div>
    </nav>
  )
}
