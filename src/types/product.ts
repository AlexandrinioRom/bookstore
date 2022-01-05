export interface ProductState {
  products: any[],
  loading: boolean,
  error: null | string,
}

export enum ProductActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
}

interface FetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS,
}

interface FetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
  payload: string,
}

interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: any[],
}

export type ProductAction = FetchProductsAction | FetchProductsErrorAction | FetchProductsSuccessAction