import axios from "axios"

const baseURL = 'http://localhost:3000/products'

export const startFetchingData = () => {
  return {
    type: 'START_FETCHING_DATA'
  }
}

export const fetchingDataProduct = (payload) => {
  return {
    type: 'FETCHING_ALL_DATA_PRODUCT',
    payload
  }
}

export const fetchingOneProduct = (payload) => {
  return {
    type: 'FETCHING_ONE_DATA_PRODUCT',
    payload
  }
}

export const fetchingAllDataProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetchingData())
      const { data } = await axios.get(baseURL);
      dispatch(fetchingDataProduct(data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchingOneDataProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startFetchingData())
      const { data } = await axios.get(`${baseURL}/${id}`);
      dispatch(fetchingOneProduct(data))
    } catch (error) {
      console.log(error);
    }
  }
}


export const storeProduct = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startFetchingData())
      const { data } = await axios.post(baseURL, payload);
      const { dataProduct } = getState();
      const newProducts = dataProduct.products.concat(data);
      dispatch(fetchingDataProduct(newProducts))
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateProduct = (payload,id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startFetchingData())
      const { data } = await axios.put(`${baseURL}/${id}`, payload);
      const { dataProduct } = getState();
      const filteredProduct = dataProduct.product.filter(product => product.id !== id);
      const newProducts = filteredProduct.concat(data);
      console.log(newProducts);
      dispatch(fetchingDataProduct(newProducts))
    } catch (error) {
      console.log(error);
    }
  }
}

export const destroyProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startFetchingData())
      const { data } = await axios.delete(`${baseURL}/${id}`);
      
      const { dataProduct } = getState();
      const newProducts = dataProduct.products.filter(product => product.id !== data.id);
      dispatch(fetchingDataProduct(newProducts))

    } catch (error) {
      console.log(error);
    }
  }
}