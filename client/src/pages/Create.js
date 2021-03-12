import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import FormProduct from '../components/FormProduct'
import Navbar from '../components/Navbar'
import { storeProduct } from '../stores/actions/productAction';

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAction = (payload) => {
    dispatch(storeProduct(payload));
    history.push('/')
  }
  return (
    <>
      <Navbar />
      <h1 className="my-5" style={{display: 'flex', justifyContent: 'center'}}>Add New Product</h1>
      <FormProduct handleAction={handleAction} />
    </>
  )
}
