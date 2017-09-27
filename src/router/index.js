import Vue from 'vue';
import Router from 'vue-router';

import About from '@/views/About';
import Home from '@/views/Home';
import ManualBarcode from '@/views/ManualBarcode';
import Product from '@/views/Product';
import Preferences from '@/views/Preferences';
import Scan from '@/views/ScanQuagga';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
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
        {
            path: '/scan',
            name: 'Scan',
            component: Scan,
        },
    ],
});
