<template>
    <div>
        <Loading v-if="isLoading"/>
        <v-container fluid grid-list-lg v-else>
            <v-layout row wrap align-baseline>
                <v-flex xs12>
                    <v-card>
                        <v-container fluid grid-list-lg>
                            <v-layout row mb-3>
                                <v-flex xs5>
                                    <v-avatar size="100%">
                                        <img class="icon" :src="this.product.icon" />
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs7 class="text-xs-center">
                                    <div>
                                        <div class="headline">Herta</div>
                                        <h2 class="title">{{ product.name }}</h2>
                                    </div>
                                </v-flex>
                            </v-layout>

                            <ProductOverviewItem name="Diet" icon="check_circle" />
                            <ProductOverviewItem name="Allergens" icon="clear" />
                            <ProductOverviewItem name="Nutriscore">
                                <span>A</span>
                            </ProductOverviewItem>
                            <ProductOverviewItem name="Labels">
                                <span>A</span>
                            </ProductOverviewItem>
                            <ProductOverviewItem name="Made">
                                <span>300km away</span>
                            </ProductOverviewItem>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-bottom-nav v-if="!isLoading" :value="true" class="white">
            <v-btn flat class="teal--text" value="recent">
                <span>Overview</span>
                <v-icon>view_list</v-icon>
            </v-btn>
            <v-btn flat class="teal--text" value="recent">
                <span>Nutrition</span>
                <v-icon>info_outline</v-icon>
            </v-btn>
            <v-btn flat class="teal--text" value="recent">
                <span>Alerts</span>
                <v-icon>warning</v-icon>
            </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script>
import Loading from '@/views/Loading';
import ProductOverviewItem from '@/components/ProductOverviewItem';

export default {
    components: {
        Loading,
        ProductOverviewItem,
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
.icon {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>
