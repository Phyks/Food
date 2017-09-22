<template>
    <v-container fluid layout wrap class="manualbarcode-panel">
        <v-layout row>
            <v-flex xs12>
                <h2 class="headline text-xs-center">{{ $t('manualBarcode.heading') }}</h2>
            </v-flex>
        </v-layout>

        <v-layout row class="mt-4">
            <v-flex xs12>
                <BarcodeIcon />
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-form class="form" v-model="valid" ref="form">
                <v-container fluid grid-list-xs>
                    <v-layout row wrap align-baseline>
                        <v-flex xs9>
                            <v-text-field
                                :label="$t('manualBarcode.EAN13Barcode')"
                                placeholder="1234567890128"
                                v-model="ean13"
                                :rules="ean13Rules"
                                :counter="13"
                                type="number"
                                required
                                dark
                                ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                            <p class="text-xs-right">
                                <v-btn
                                    @click="submit"
                                    :disabled="!valid"
                                    :class="{ green: valid }"
                                    class="no-min-width"
                                    dark
                                    >
                                    {{ $t('manualBarcode.go') }}
                                </v-btn>
                            </p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-layout>
    </v-container>
</template>

<script>
import BarcodeIcon from '@/components/BarcodeIcon';

export default {
    created() {
        this.$store.dispatch('setTitle', { title: this.$t('navigation.manualBarcode') });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: '#42A5F5' });
    },
    components: {
        BarcodeIcon,
    },
    data() {
        return {
            valid: false,
            ean13: '',
            ean13Rules: [
                v => !!v || 'EAN13 barcode is required.',
                v => /^\d{13}$/.test(v) || 'EAN13 barcode is invalid.',
            ],
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$router.push({ name: 'Product', params: { barcode: this.ean13 } });
            }
        },
    },
};
</script>

<style scoped>
.manualbarcode-panel {
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
}

.form {
    width: 100%;
}

.no-min-width {
    min-width: auto;
}
</style>
