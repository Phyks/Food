<template>
    <p>TODO</p>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Preferences' });
    },
};
</script>
