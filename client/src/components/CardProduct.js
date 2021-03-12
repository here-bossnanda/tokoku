import React from 'react'

export default function CardProduct({ product, handleDelete, handleEdit }) {
  return (
    <div  key={product.id} className="card" style={{width: '18rem', margin: '5px'}}>
      <img src={product.imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">price: {product.price} | stock: {product.stock}</h6>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="card-footer">
        <div style={{display:'flex', justifyContent: 'flex-end', margin: '5px'}}>
        <a className="btn btn-warning" onClick={(e) => handleEdit(e, product.id)} >Edit</a>
        <a className="btn btn-danger" onClick={(e) => handleDelete(e, product.id)} style={{marginLeft: '5px'}}>Delete</a>
        </div>
      </div>
    </div>
  )
}
