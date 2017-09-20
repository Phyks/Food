<template>
    <v-app toolbar>
        <NavigationDrawer :isDrawerVisible="isDrawerVisible"/>
        <v-toolbar class="indigo" dark>
            <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer';

export default {
    components: {
        NavigationDrawer,
    },
    computed: {
        title() {
            return this.$store.getters.title;
        },
    },
    data() {
        return {
            isDrawerVisible: false,
        };
    },
    methods: {
        showHideDrawer() {
            this.isDrawerVisible = !this.isDrawerVisible;
        },
    },
};
</script>

<style>
</style>
