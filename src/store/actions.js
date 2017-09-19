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
};
