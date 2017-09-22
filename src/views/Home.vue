<template>
    <v-container fluid layout wrap grid-list-lg class="home-panel">
        <v-layout row wrap>
            <v-flex xs12>
                <v-layout row>
                    <v-flex xs12>
                        <h2 class="text-xs-center display-3 home-title">
                            What's in<br/>
                            <strong>my</strong></br/>
                            food?
                        </h2>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout row align-baseline> <!-- Should be pushed to bottom -->
                    <v-flex xs4 class="text-xs-center">
                        <v-btn
                            fab
                            large
                            class="white"
                            :to="{ name: 'Scan' }"
                            >
                            <v-icon>camera_alt</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex xs4 class="text-xs-center">
                        <p class="body-2 home-or">or</p>
                    </v-flex>
                    <v-flex xs4 class="text-xs-center">
                        <v-btn
                            fab
                            large
                            class="white"
                            :to="{ name: 'ManualBarcode' }"
                            >
                            <v-icon>keyboard</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import constants from '@/constants';

export default {
    created() {
        this.$store.dispatch('setTitle', { title: constants.APP_NAME });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: constants.APP_DEFAULT_BACKGROUND_COLOR });
    },
};
</script>

<style scoped>
.home-panel {
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
}

.home-title {
    font-size: 64px !important;
}

.home-or {
    font-size: 24px !important;
    font-weight: 600;
}
</style>
