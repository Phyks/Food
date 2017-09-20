<template>
    <v-form v-model="valid" ref="form">
        <v-text-field
            label="EAN13 barcode"
            v-model="ean13"
            :rules="ean13Rules"
            :counter="13"
            type="number"
            required
            ></v-text-field>
        <p class="text-xs-right">
            <v-btn @click="submit" :disabled="!valid" :class="{ green: valid }">Find</v-btn>
        </p>
    </v-form>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Manual barcode' });
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
