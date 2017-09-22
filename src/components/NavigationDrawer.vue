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
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'Scan' }">
                <v-list-tile-action>
                    <v-icon>search</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Scan</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'ManualBarcode' }">
                <v-list-tile-action>
                    <v-icon>search</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Find by barcode</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'Preferences' }">
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Preferences</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
/**
 * TODO: Do not open drawer on route change.
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
