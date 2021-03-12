const initialState = {
  products: [],
  product: {},
  isLoading: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_DATA':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCHING_ALL_DATA_PRODUCT':
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }
    case 'FETCHING_ONE_DATA_PRODUCT':
      return {
        ...state,
        product: action.payload,
        isLoading: false
      }
  
    default:
      return state
  }
}

export default productReducer