<template>
    <div>
        <h2>Let's scan something!</h2>
        <h2>Found: {{ barcode }}</h2>

        <div id="interactive" class="viewport"></div>
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
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    facingMode: 'environment',
                    aspectRatio: { min: 1, max: 2 },
                },
            },
            /* locator: {
                patchSize: 'medium',
                halfSample: true,
            },
            frequency: 10,
            decoder: {
                readers: [
                    'ean_reader',
                ],
            },
            locate: true, */
        }, (err) => {
            if (err) {
                this.error = err.toString();
                // return;
            }

            // Quagga.start();
        });
        /* Quagga.onProcessed((result) => {
            console.log(result);
        }); */
    },
    beforeDestroy() {
        // Quagga.offDetected(this.handleBarcode);
        // Quagga.stop();
    },
};
</script>
