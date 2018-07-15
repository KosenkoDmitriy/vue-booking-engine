<template>
<v-content>
<v-container fluid>
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
          height="auto">
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

       <v-list three-line>
         <template v-for="(item, index) in items">
           <extra-table
            v-bind:isVisible=false v-on:calculateTotal="calculateTotalSum" :key="'et'+index">
           </extra-table>
           <v-subheader
             v-if="item.header"
             :key="item.header"
           >
             {{ item.header }}
           </v-subheader>

           <v-divider
             v-if="item.divider"
             :inset="item.inset"
             :key="index"
           ></v-divider>

           <v-list-tile
             v-else
             :key="item.title"
             avatar
             @click=""
           >

             <v-list-tile-avatar>
               <img :src="item.avatar">
             </v-list-tile-avatar>

             <v-list-tile-content>

               <v-list-tile-title v-html="item.title"></v-list-tile-title>
               <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
               <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
             </v-list-tile-content>
             <v-list-tile-action>

               <!-- <v-btn v-on:click="isExtraVisible = true" :color="item.active ? 'teal' : 'blue'">Hold</v-btn> -->
               <v-list-tile-sub-title>Room Hire Cost-Half Day: $300</v-list-tile-sub-title>
               <v-list-tile-sub-title>Extras: - </v-list-tile-sub-title>
               <v-list-tile-title>Total: ${{total}}</v-list-tile-title>
               <v-btn :color="item.active ? 'teal' : 'green'">Book And Confirm</v-btn>
            </v-list-tile-action>
           </v-list-tile>
         </template>
       </v-list>
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
import ExtraTable from './ExtraTable.vue'
var total = -1;
export default {
  name: 'AppContent',
  components: {
    ExtraTable
  },
  methods: {
    calculateTotalSum(sum) {
      this.total = sum;
      // alert(sum);
    }
  },
  data () {
      return {
        // total,
        total: -1,
        eventList: ['Meeting', 'Wedding'],
        buildList: ['Theater', 'Restaurant', 'Office', 'Flat'],
        e1: 0,
        items: [
          // { header: 'Today' },
          {
            avatar: './avatar.png',
            title: 'Office',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: './avatar.png',
            title: 'Flat <span class="grey--text text--lighten-1">50</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: './avatar.png',
            title: 'Restaurant',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    }
}
</script>
<style>
.v-list__tile {
  height: 180px !important;
}
.v-avatar {
  width: 160px !important;
  height: 160px !important;
}
.v-avatar img {
  border-radius: 5%;
}
.v-list__tile__content {
    padding-left: 85px;
}
</style>
