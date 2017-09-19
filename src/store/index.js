import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';  // TODO

import actions from './actions';
import getters from './getters';
import { initialState as state, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    plugins: [createLogger()],
});
