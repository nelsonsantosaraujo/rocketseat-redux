import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartFail, addProductToCartRequest, addProductToCartSuccess } from './actions';

import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProducStock({payload}: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFail(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProducToCartRequest, checkProducStock)
]);