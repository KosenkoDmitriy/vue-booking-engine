<template>
<v-content>
<v-container fluid>
  <router-view></router-view>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Event Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Select Package</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Book and Pay </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px">
          <v-layout wrap>
            <v-flex xs5 sm4 d-flex>
              <v-select
                :items="eventList"
                label="Select Event"></v-select>
            </v-flex>
            <v-flex xs2 sm4 d-flex>
              <v-text-field
                label="Select Quantity">10</v-text-field>
            </v-flex>
            <v-flex xs5 sm4 d-flex>
              <v-select
                :items="buildList"
                label="Select Building Type"></v-select>
            </v-flex>
          </v-layout>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px">
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px">
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 1">
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</v-content>
</template>

<script>

export default {
  name: 'AppContent',
  data () {
      return {
        eventList: ['Meeting', 'Wedding'],
        buildList: ['Theater',],
        e1: 0
      }
    }
}
</script>
