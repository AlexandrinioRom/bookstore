import { useTypeSelector } from '../../hooks/useTypeSelector'
import { fetchUsers } from '../../store/actionCreators/user'
import Header from '../../containers/header'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

const Home: React.FC = () => {
  const { users, error, loading } = useTypeSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchUsers())

  }, [])

  if (loading) {
    return <h1> Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <Header />
      <ul>
        {users.map((user, index) =>
          <li key={index}>{user.name}</li>
        )}
      </ul>
    </>
  );
}

export default Home