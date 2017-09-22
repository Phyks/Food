import getProduct from '@/api';
import * as types from './mutations-types';

export default {
    getProduct({ commit }, { EAN }) {
        commit(types.IS_LOADING);
        getProduct(EAN).then(
            (result) => {
                const { product } = result;
                commit(types.STORE_PRODUCT, { product });
            },
        );
    },
    setTitle({ commit }, { title }) {
        commit(types.SET_TITLE, { title });
    },
    setBackgroundColor({ commit }, { backgroundColor }) {
        commit(types.SET_BACKGROUND_COLOR, { backgroundColor });
    },
};
