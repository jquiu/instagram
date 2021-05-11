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
  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='iPhone with Instagram app'
        />
      </div>
    </div>
  )
}

export default Login
