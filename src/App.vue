<template>
    <v-app toolbar :style="{ backgroundColor: backgroundColor }">
        <NavigationDrawer v-model="isDrawerVisible"/>
        <v-toolbar dark>
            <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <main>
            <router-view></router-view>
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
            return this.$store.getters.layout.title;
        },
        backgroundColor() {
            return this.$store.getters.layout.backgroundColor;
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
