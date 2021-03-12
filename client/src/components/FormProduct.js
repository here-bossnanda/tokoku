import React, { useEffect, useState } from 'react'

export default function FormProduct({handleAction, product}) {
  const [inputProduct, setInputProduct] = useState({
    name: '',
    price: '',
    stock: '',
    imageUrl: '',
    description: ''
  })

  useEffect(() => {
    if (product) {
      setInputProduct( {
        name: product.name,
        price: product.price,
        stock: product.stock,
        imageUrl: product.imageUrl,
        description: product.description
      })
    }
  }, [product])

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setInputProduct({
      ...inputProduct,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAction(inputProduct)
  }
  
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="name" required onChange={(e) => handleChange(e)} value={inputProduct.name} id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">price</label>
          <input type="number" className="form-control" placeholder="price" required onChange={(e) => handleChange(e)} value={inputProduct.price} id="price" name="price"/>
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input type="number" className="form-control" placeholder="stock" required onChange={(e) => handleChange(e)} value={inputProduct.stock} id="stock" name="stock"/>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image Url</label>
          <input type="text" className="form-control" placeholder="image url" required onChange={(e) => handleChange(e)} value={inputProduct.imageUrl} id="imageUrl" name="imageUrl"/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" placeholder="description" required onChange={(e) => handleChange(e)} value={inputProduct.description} id="description" name="description"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  )
}
