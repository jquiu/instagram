import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

function Login() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [error, setError] = useState(null)
  const [user, setUser] = useState({
    pass: '',
    email: ''
  })
  const isInvalid = user.pass === '' || user.email === ''

  useEffect(() => {
    document.title = 'Login-instagram'
  })

  const handleAuth = () => {}
  return <p>Login page :P</p>
}

export default Login
