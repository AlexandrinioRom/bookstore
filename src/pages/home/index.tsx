import { useTypeSelector } from '../../hooks/useTypeSelector'
import { fetchProduct } from '../../store/actionCreators/product'
import Header from '../../containers/header'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

const Home: React.FC = () => {
  const { products, error, loading } = useTypeSelector(state => state.product)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchProduct())

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
        {products.map((product, index) =>
          <li key={index}>{product.name}</li>
        )}
      </ul>
    </>
  );
}

export default Home