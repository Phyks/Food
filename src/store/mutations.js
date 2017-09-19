import * as types from './mutations-types';

export const initialState = {
    product: null,
    isLoading: false,
};

export const mutations = {
    [types.STORE_PRODUCT](state, { product }) {
        state.product = product;
        state.isLoading = false;
    },
    [types.IS_LOADING](state) {
        state.isLoading = true;
    },
};
