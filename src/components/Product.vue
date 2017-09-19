<template>
    <div>
        <template v-if="isLoading">
            <p>Loading…</p>
        </template>
        <template v-else>
            <h2>{{ this.product.product_name }}</h2>
            <table>
                <tr>
                    <th>Barcode</th>
                    <td>{{ $route.params.barcode }}</td>
                </tr>
            </table>
        </template>
    </div>
</template>

<script>
export default {
    created() {
        this.fetchData();
    },
    watch: {
        // Fetch again when the component is updated
        $route: 'fetchData',
    },
    computed: {
        product() {
            return this.$store.getters.product;
        },
        isLoading() {
            return this.$store.getters.isLoading;
        },
    },
    methods: {
        fetchData() {
            this.$store.dispatch('getProduct', { EAN: this.$route.params.barcode });
        },
    },
};
</script>
