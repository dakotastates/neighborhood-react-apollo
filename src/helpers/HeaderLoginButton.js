import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { GET_CURRENT_USER } from './Queries'

const HeaderLoginButton = () => {

  const { client, data } = useQuery(GET_CURRENT_USER)

  // Reset Apollo and local store on logout
  const logout = () => {
    window.localStorage.clear()
    client.resetStore()
  }

  if (data && data.currentUser) {
    return (
      <Button onClick={logout} color='inherit'>Logout</Button>
    )
  }
  return (
    <Link to='/login'>
      <Button color='inherit'>Login</Button>
    </Link>
  )
}

export default HeaderLoginButton
