import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import { destroyProduct, fetchingAllDataProduct } from '../stores/actions/productAction';

export default function Home() {
  const { products, isLoading } = useSelector(state => state.dataProduct);
  const [dataProducts, setDataProducts] = useState([]);
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchingAllDataProduct())
  }, [])

  useEffect(() => {
    setDataProducts(products)
  }, [products])

  // const handleAdd = (e) => {
  //   e.preventDefault()
  //   history.push('/add')
  // }

  const handleEdit = (e, id) => {
    e.preventDefault();
    history.push(`/product/${id}`);
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(destroyProduct(id))
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      }
    })
  }

  if(isLoading) return <h3 style={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>Loading...</h3>

  return (
    <>
      <Navbar />
      <h1 className="my-5" style={{display: 'flex', justifyContent: 'center'}}>Data Product</h1>
      <div className="container">
        {/* <a className="btn btn-primary my-5" onClick={(e) => handleAdd(e)}>Add new product</a>   */}
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {dataProducts.map(product => <CardProduct product={product} handleDelete={handleDelete} handleEdit={handleEdit} /> )}
        </div>
      </div>
    </>
  )
}
