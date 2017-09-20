import * as types from './mutations-types';

export const initialState = {
    product: null,
    isLoading: false,
    title: 'Food scanning',
};

export const mutations = {
    [types.STORE_PRODUCT](state, { product }) {
        state.product = product;
        state.isLoading = false;
    },
    [types.IS_LOADING](state) {
        state.isLoading = true;
    },
    [types.SET_TITLE](state, { title }) {
        state.title = title;
    },
};
