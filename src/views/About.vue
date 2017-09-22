<template>
    <v-container fluid>
        <p>
            {{ $t('about.appDescription') }}
        </p>
        <i18n path="about.licenseDescription" tag="p">
            <a href="https://github.com/Phyks/Food/blob/master/LICENSE.md" place="MITLicense">{{ $t('about.MITLicense') }}</a>
            <a href="https://github.com/phyks/food" place="Github">Github</a>
            <a href="https://github.com/phyks/food/issues" place="there">{{ $t('misc.there') }}</a>
        </i18n>
        <i18n path="about.OpenFoodFactsDescription" tag="p">
            <a href="https://world.openfoodfacts.org/" place="OpenFoodFacts">OpenFoodFacts</a>
            <a href="http://opendatacommons.org/licenses/odbl/1.0/" place="OpenDatabaseLicense">{{ $t('about.OpenDatabaseLicense') }}</a>
        </i18n>
        <p class="text-xs-center"><img src="/static/openfoodfacts.svg"/></p>
    </v-container>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('setTitle', { title: this.$t('navigation.about') });
        this.$store.dispatch('setBackgroundColor', { backgroundColor: '#F5F5F5' });
    },
};
</script>
