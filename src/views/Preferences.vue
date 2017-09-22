<template>
    <v-container fluid>
        <v-form>
            <v-layout row>
                <v-flex xs12>
                    <v-select
                      label="I'm allergic to"
                      v-bind:items="allergens"
                      v-model="e6"
                      multiple
                      max-height="400"
                    ></v-select>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: this.$t('navigation.preferences') });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: '#FF7043' });
    },
    data() {
        return {
            allergens: [
                'nuts',
                'milk',
            ],
        };
    },
};
</script>
