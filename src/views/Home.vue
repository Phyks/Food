<template>
    <div>
        <h2>Let's start scanning!</h2>
        <v-btn
            dark
            fab
            fixed
            bottom
            right
            class="pink"
            >
            <v-icon>search</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: 'Food scanning' });
    },
};
</script>
