<template>
    <div>
        <Loading v-if="isLoading"/>
        <v-container fluid v-else>
            <v-layout row align-baseline>
                <v-flex xs3 class="text-xs-center">
                    <v-avatar size="100%">
                      <img :src="this.product.image_front_small_url" :alt="product.product_name">
                    </v-avatar>
                </v-flex>
            </v-layout>
            <v-layout row>
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
            </v-layout>
        </v-container>
        <v-bottom-nav v-if="!isLoading" absolute :value="true" class="transparent">
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
    </div>
</template>

<script>
import Loading from '@/views/Loading';

export default {
    components: {
        Loading,
    },
    created() {
        this.$store.dispatch('setTitle', { title: '' });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: '#9CCC65' });
        this.fetchData();
    },
    watch: {
        // Fetch again when the component is updated
        $route: 'fetchData',
    },
    computed: {
        product() {
            return this.$store.state.product;
        },
        isLoading() {
            return this.$store.state.isLoading;
        },
    },
    methods: {
        fetchData() {
            this.$store.dispatch('getProduct', { EAN: this.$route.params.barcode });
        },
    },
};
</script>

<style scoped>
.product-icon {
    background-color: white;
    border-radius: 100%;
}
.product-icon >>> img {
    vertical-align: middle;
}
</style>
