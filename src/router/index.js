import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Scan from '@/components/Scan';
import Product from '@/components/Product';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/scan',
            name: 'Scan',
            component: Scan,
        },
        {
            path: '/barcode/:barcode',
            name: 'Product',
            component: Product,
        },
    ],
});
