<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="date"
      label="Select Date"
      prepend-icon="event"
      readonly
    ></v-text-field>
    <v-date-picker v-model="date" @input="$refs.menu.save(date)"></v-date-picker>
  </v-menu>
</template>
<script>
  export default {
    name: 'DatePicker',
    data () {
      return {
        date: null,
        menu: false,
        modal: false,
        // menu2: false,
      }
    }
  }
</script>
