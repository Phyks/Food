<template>
    <v-container fluid>
        <p>TODO</p>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Preferences' });
    },
};
</script>
