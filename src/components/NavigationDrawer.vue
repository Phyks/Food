<template>
    <v-navigation-drawer
        persistent
        clipped
        enable-resize-watcher
        v-model="isActive"
        >
        <v-list>
            <v-list-tile :to="{ name: 'Home' }" exact>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('navigation.home') }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'Scan' }">
                <v-list-tile-action>
                    <v-icon>camera_alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('navigation.scan') }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'ManualBarcode' }">
                <v-list-tile-action>
                    <v-icon>keyboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('navigation.manualBarcode') }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'Preferences' }">
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('navigation.preferences') }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
/**
 * TODO: Do not open drawer on route change nor on resize.
 * TODO: Should stick to the toolbar on xs screens. Should be fixed by Vuetify 0.16.
 */
export default {
    props: {
        value: Boolean,
    },
    computed: {
        isActive: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>
