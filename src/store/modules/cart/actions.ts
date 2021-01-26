import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProducToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProducToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFail(productId: number) {
  return {
    type: ActionTypes.addProducToCartFailure,
    payload: {
      productId,
    },
  };
}