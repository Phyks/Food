<template>
    <v-container fluid>
        <h2>Let's scan something!</h2>

        <p>Loading scanning app…</p>
    </v-container>
</template>

<script>
export default {
    mounted() {
        // TODO: Rework this
        const host = encodeURIComponent(`${window.location.protocol}//${window.location.host}`);
        let href = this.$router.resolve({ name: 'Product', params: { barcode: 'CODE' } }).href;
        href = encodeURIComponent(href.replace('CODE', '{CODE}'));
        window.location = `zxing://scan/?ret=${host}${href}`;
    },
};
</script>
