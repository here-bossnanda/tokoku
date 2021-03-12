import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import FormProduct from '../components/FormProduct'
import Navbar from '../components/Navbar'
import { fetchingOneDataProduct, updateProduct } from '../stores/actions/productAction';

export default function Edit() {
  const { product } = useSelector(state => state.dataProduct)
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchingOneDataProduct(id))
  }, [])

  const handleAction = (payload) => {
    dispatch(updateProduct(payload, id));
    history.push('/')
  }

  return (
    <>
      <Navbar />
      <h1 className="my-5" style={{display: 'flex', justifyContent: 'center'}}>Edit Product</h1>
      <FormProduct handleAction={handleAction} product={product}/>
    </>
  )
}
