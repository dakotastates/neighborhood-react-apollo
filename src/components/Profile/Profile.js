import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { GET_CURRENT_USER } from '../../helpers/Queries'
import Loading from '../../helpers/Loading'
import Error from '../../helpers/Error'

const Profile = () => {

  const { loading, error, data } = useQuery(GET_CURRENT_USER)

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />

  return (
    <Paper>
      <Typography variant='h3' component='h1'>
            Profil
      </Typography>
      <Typography component='p'>
        {`${data.currentUser.firstname} ${data.currentUser.lastname}`}
      </Typography>
    </Paper>
  )
}

export default Profile
