import { IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
}

export function addProductToCartFail(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAIL',
    payload: {
      productId,
    },
  };
}