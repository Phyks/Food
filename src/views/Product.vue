<template>
    <v-container fluid class="product-panel">
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
                </v-tabs>
            </template>
        </v-flex>
        <!-- TODO: Should be pushed to left -->
        <v-bottom-nav absolute :value="true" class="transparent">
            <v-btn flat class="teal--text" value="recent">
                <span>Overview</span>
                <v-icon>view_list</v-icon>
            </v-btn>
            <v-btn flat class="teal--text" value="recent">
                <span>Nutrition</span>
                <v-icon>info_outline</v-icon>
            </v-btn>
            <v-btn flat class="teal--text" value="recent">
                <span>Labels</span>
                <v-icon>info_outline</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Loading' });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: '#00d400' });
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
