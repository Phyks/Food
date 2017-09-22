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
}

.barcode-icon >>> path {
    fill: white;
}
</style>
