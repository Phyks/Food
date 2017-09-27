<template>
    <v-layout row>
        <v-flex xs7>
            <v-list-tile-title>{{ name }}</v-list-tile-title>
        </v-flex>
        <v-flex xs5 class="text-xs-right">
            <v-icon v-if="icon">{{ icon }}</v-icon>
            <slot v-else />
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        name: String,
        icon: String,
    },
};
</script>
