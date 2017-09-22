import constants from '@/constants';
import * as types from './mutations-types';

export const initialState = {
    product: null,
    isLoading: false,
    ui: {
        title: constants.APP_NAME,
        backgroundColor: constants.APP_DEFAULT_BACKGROUND_COLOR,
    },
};

export const mutations = {
    [types.STORE_PRODUCT](state, { product }) {
        state.product = product;
        state.isLoading = false;
        state.ui.title = product.product_name;  // Set UI title
    },
    [types.IS_LOADING](state) {
        state.isLoading = true;
    },
    [types.SET_TITLE](state, { title }) {
        state.ui.title = title;
    },
    [types.SET_BACKGROUND_COLOR](state, { backgroundColor }) {
        state.ui.backgroundColor = backgroundColor;
    },
};
