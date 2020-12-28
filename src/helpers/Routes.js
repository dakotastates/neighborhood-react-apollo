import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Auth/Login'
import Profile from '../components/Profile/Profile'

const Routes = () => (
  <>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/profile' component={Profile} />
  </>
)

export default Routes
