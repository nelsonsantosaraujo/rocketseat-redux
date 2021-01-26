import { all, takeLatest } from 'redux-saga/effects';

function checkProducStock() {
  console.log('Adicionou ao carrinho');
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProducStock)
])