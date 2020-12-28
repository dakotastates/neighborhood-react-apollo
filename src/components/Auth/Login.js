import React from "react";
import { useAuth0 } from "./react-auth0-spa";

import { Button } from "react-bootstrap";

const Login = () => {
  const { loading, loginWithRedirect } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-heading">
          Welcome to the GraphQL tutorial app
        </div>
        <div className="overlay-message">Please login to continue</div>
        <div className="overlay-action">
          <Button
            id="qsLoginBtn"
            variant="primary"
            className="btn-margin loginBtn"
            onClick={() => {
              loginWithRedirect({});
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React from 'react'
// import { useLazyQuery } from '@apollo/react-hooks'
// import { Redirect } from 'react-router'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import { LOGIN_USER } from '../../helpers/Queries'
// import Loading from '../../helpers/Loading'
// import Error from '../../helpers/Error'
// import { useForm } from '../../helpers/Hooks'
//
// const Login = () => {
//   // Use form state
//   const { values, handleChange, handleSubmit } = useForm((credentials) => loginUser(), {
//     email: '',
//     password: ''
//   })
//
//   // Lazy query for login user method
//   const [loginUser, { called, loading, data, error }] = useLazyQuery(LOGIN_USER, { variables: values })
// // debugger
//   // Wait for lazy query
//   if (called && loading) return <Loading />
//
//   // Show error message if lazy query fails
//   if (error) return <Error message={error.message} />
//
//   // Store token if login is successful
//   if (data) {
//     window.localStorage.setItem('token', data.loginUser.token)
//
//     // Redirect to home page
//     return <Redirect to='/' />
//   }
//
//   return (
//     <Paper >
//       <Typography  variant='h3' component='h1'>
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit}
//       >
//         <TextField
//           variant='outlined'
//           margin='normal'
//           required
//           fullWidth
//           id='email'
//           name='email'
//           label='Email Address'
//           type='email'
//           value={values.email}
//           onChange={handleChange}
//           autoFocus
//         />
//         <TextField
//           variant='outlined'
//           margin='normal'
//           required
//           fullWidth
//           id='password'
//           name='password'
//           label='Password'
//           type='password'
//           value={values.password}
//           onChange={handleChange}
//         />
//         <Button
//           type='submit'
//           fullWidth
//           variant='contained'
//           color='primary'
//
//         >
//           Sign in
//         </Button>
//       </form>
//     </Paper>
//   )
// }
//
// export default Login
