import { fetchProduct } from '../../../store/actionCreators/product'
import { useTypeSelector } from '../../../hooks/useTypeSelector'
import Header from '../../containers/header'
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

const Home: React.FC = () => {
  const { products, error, loading } = useTypeSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchProduct())

  }, [])

  return (
    <>
      <Header />
      <ul>
        {loading && <h1> Идет загрузка...</h1>}
        {error && <h1>{error}</h1>}

        {products.map((product, index) =>
          <li key={index}>{product.fullName}</li>
        )}
      </ul>
    </>
  );
}

export default Home