<template>
    <div>
        <h2>Let's scan something!</h2>
        <h2>Found: {{ barcode }}</h2>

        <div ref="video"></div>
        <p v-if="!playing && error">{{ error }}</p>
    </div>
</template>

<script>
import 'webrtc-adapter';
import Quagga from 'quagga';

export default {
    data() {
        return {
            error: 'Video stream not available.',
            playing: false,
            barcode: 'Not found',
        };
    },
    methods: {
        handleBarcode(data) {
            this.barcode = data.codeResult.code;
        },
    },
    mounted() {
        const videoElement = this.$refs.video;
        const barcodeHandler = this.handleBarcode;

        Quagga.init({
            inputStream: {
                name: 'Scan',
                type: 'LiveStream',
                constraints: {
                    facingMode: 'environment',
                },
                target: videoElement,
            },
            decoder: {
                readers: [
                    'ean_reader',
                ],
                debug: {
                    drawBoundingBox: true,
                    showFrequency: true,
                    drawScanline: true,
                    showPattern: true,
                },
            },
        }, (err) => {
            if (err) {
                this.error = err.toString();
                return;
            }

            Quagga.start();
            Quagga.onDetected(barcodeHandler);
        });
    },
    beforeDestroy() {
        Quagga.offDetected(this.handleBarcode);
        Quagga.stop();
    },
};
</script>

<style>
/*canvas.drawingBuffer {
    display: none;
}*/
</style>
