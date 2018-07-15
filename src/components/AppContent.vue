<template>
<v-content><v-container fluid>
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
                label="Number of Quests"
                value="10"></v-text-field>
            </v-flex>
            <v-flex xs5 sm4 d-flex>
              <v-select
                :items="buildList"
                label="Select Building Type"
                ></v-select>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <date-picker></date-picker>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <time-picker></time-picker>
          </v-flex>
          <v-spacer></v-spacer>

          </v-layout>
          <v-card-actions style="text-xs-right">
            <v-btn
              color="primary"

              @click="e1 = 2">
              Find Venue
            </v-btn>
            <!-- <v-btn flat>Cancel</v-btn> -->
          </v-card-actions>
        </v-card>

      </v-stepper-content>

      <v-stepper-content step="2">
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

          <v-list three-line class="itemList">
            <template v-for="(item, index) in items">
              <extra-table v-if="item.id"
                v-bind:isVisible=false v-bind:id="index"
                v-on:calculateTotal="calculateTotalSum"
                :key="item.id">
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
                 :key="'divider'+index"
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
                  <v-list-tile-sub-title>Room Hire Cost/Day: $ {{ item.total }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>Extras: $ {{ item.totalExtra }} </v-list-tile-sub-title>
                  <v-list-tile-title>Total: $ {{ calculateTotalWithExtraPkg(item) }}</v-list-tile-title>
                  <v-btn v-on:click="e1 = 3" :color="item.active ? 'teal' : 'green'">Book And Pay</v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn flat @click="e1 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-layout>
          <v-flex xs-12 sm-6>
            <h2>Booker Details</h2>
            <booker-form></booker-form>
          </v-flex>
          <v-flex xs-12 sm-6>
            <h2>On Site Contacts</h2>
            <booker-form></booker-form>
          </v-flex>
        </v-layout>
        <v-btn
          color="primary"
          @click="e1 = 1">
          Book And Pay
        </v-btn>

        <v-btn flat @click="e1 = 2">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</v-content>
</template>

<script>
import ExtraTable from './ExtraTable.vue'
import DatePicker from './DatePicker.vue'
import TimePicker from './TimePicker.vue'
import BookerForm from './BookerForm.vue'
export default {
  name: 'AppContent',
  components: {
    ExtraTable,
    DatePicker,
    TimePicker,
    BookerForm,
  },
  methods: {
    calculateTotalSum(id, total) {
      // alert(id+' '+total);
      this.items[id].totalExtra = total
    },
    calculateTotalWithExtraPkg(item) {
      return item.totalExtra + item.total
    }
  },
  data () {
      return {
        eventList: ['Banquet', 'Cocktail', 'Conference', 'Meeting', 'Wedding'],
        buildList: [ 'Cafe', 'Theater', 'Restaurant', 'Office', 'Flat'],
        e1: 0,
        items: [
          // { header: 'Today' },
          {
            id: 1,
            avatar: './avatar.png',
            title: 'Office',
            subtitle: "<span class='text--primary'>255.5 sqm</span> <ul><li>Largest room</li><li>Blackout blinds</li><li>Doors leading onto a balcony</li></ul>",
            total: 500,
            totalExtra: 0,
          },
          { divider: true, inset: true },
          {
            id: 3,
            avatar: './avatar.png',
            title: 'Flat <span class="grey--text text--lighten-1">50</span>',
            subtitle: "<span class='text--primary'>155.5 sqm</span> &mdash; <ul><li>Largest room</li><li>Blackout blinds</li><li>Doors leading onto a balcony</li></ul>",
            total: 200,
            totalExtra: 0,
          },
          { divider: true, inset: true },
          {
            id: 5,
            avatar: './avatar.png',
            title: 'Restaurant',
            subtitle: "<span class='text--primary'>555.5 sqm</span> &mdash; <ul><li>Largest room</li><li>Blackout blinds</li><li>Doors leading onto a balcony</li></ul>",
            total: 900,
            totalExtra: 0,
          }
        ]
      }
    }
}
</script>
<style>
.itemList .v-list__tile {
  height: 180px !important;
}
.itemList .v-avatar {
  width: 160px !important;
  height: 160px !important;
}
.itemList .v-avatar img {
  border-radius: 5%;
}
.itemList .v-list__tile__content {
    padding-left: 85px;
}
</style>
