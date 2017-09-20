import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import ManualBarcode from '@/views/ManualBarcode';
import Scan from '@/views/Scan';
import Product from '@/views/Product';
import Preferences from '@/views/Preferences';

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
            path: '/barcode',
            name: 'ManualBarcode',
            component: ManualBarcode,
        },
        {
            path: '/barcode/:barcode',
            name: 'Product',
            component: Product,
        },
        {
            path: '/preferences',
            name: 'Preferences',
            component: Preferences,
        },
    ],
});
