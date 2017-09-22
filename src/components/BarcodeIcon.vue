<template>
    <div class="barcode-icon" v-html="BarcodeSVG"></div>
</template>

<script>
import BarcodeSVG from '@/assets/barcode.svg';

export default {
    data() {
        return {
            BarcodeSVG,
        };
    },
};
</script>

<style scoped>
.barcode-icon >>> line, .barcode-icon >>> path, .barcode-icon >>> polyline {
    stroke: white;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
}

.barcode-icon >>> path {
    fill: white;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
}
</style>
