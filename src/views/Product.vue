<template>
    <v-flex class="text-xs-center">
        <template v-if="isLoading">
            <p>Loading…</p>
        </template>
        <template v-else>
            <p><img :src="this.product.image_front_small_url"></p>
            <v-tabs centered>
                <v-tabs-items>
                    <v-tabs-content id="tab-overview">
                        <v-card flat>
                            <v-card-text>
                            </v-card-text>
                        </v-card>
                    </v-tabs-content>
                    <v-tabs-content id="tab-nutrition">
                        <v-card flat>
                            <v-card-text>
                                <v-data-table
                                    hide-actions
                                    >
                                    <template slot="items" scope="props">
                                        <td>{{ props.item.name }}</td>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-tabs-content>
                    <v-tabs-content id="tab-labels">
                        <v-card flat>
                            <v-card-text>Bidule</v-card-text>
                        </v-card>
                    </v-tabs-content>
                </v-tabs-items>
                <v-tabs-bar class="cyan">
                    <v-tabs-slider class="yellow"></v-tabs-slider>
                    <v-tabs-item href="#tab-overview">Overview</v-tabs-item>
                    <v-tabs-item href="#tab-nutrition">Nutrition</v-tabs-item>
                    <v-tabs-item href="#tab-labels">Labels</v-tabs-item>
                </v-tabs-bar>
            </v-tabs>
        </template>
    </v-flex>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Loading' });
        this.fetchData();
    },
    watch: {
        // Fetch again when the component is updated
        $route: 'fetchData',
    },
    computed: {
        product() {
            const product = this.$store.getters.product;
            this.$store.dispatch('setTitle', { title: product.product_name });
            return product;
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
