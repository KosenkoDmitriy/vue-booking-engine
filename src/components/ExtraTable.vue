<template>
  <div class="text-xs-center">
    <v-btn v-on:click="isExtraVisible = !isExtraVisible" :color="'blue'">Add Extras</v-btn>

  <div id="extra_table" v-if="isExtraVisible">
    <v-toolbar flat color="white">
      <v-toolbar-title>Adding Extras</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
        <v-btn v-on:click="calculateTotalSum(id)">Done</v-btn>
    </v-toolbar>
  <v-data-table
    :headers="headers"
    :items="extras"
    :footer="total"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          v-model="props.item.selected"
          primary
          hide-details
        ></v-checkbox>
      </td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.quantity }}</td>
      <td class="text-xs-right">{{ props.item.unit_price }}</td>
      <td class="text-xs-right">$ {{ props.item.cost }}</td>
      <td class="text-xs-right">$ {{ props.item.quantity * props.item.cost  }}</td>
    </template>
    <template slot="footer">
      <td colspan="100%" class="text-xs-right">
        <strong>Total: $ {{ total = calcTotalSumOfSelectedExtras }} </strong>
      </td>
    </template>
  </v-data-table>
</div>

</div>
</template>

<script>
var total = 0;
// var id2 = 0;

var isExtraVisible = false;

  export default {

    name: "ExtraTable",
    // props: [
    //   'isVisible'
    // ],
    props: {
      isVisible: Boolean,
      id:Number,
      // total: Number,
    },
    computed: {
      calcTotalSumOfSelectedExtras: function() {
        return this.extras.filter(function (item) {
          return item.selected === true
        }).reduce( (prevTotal, item) => {
          return prevTotal + (item.quantity * item.cost)
        }, 0)
      }
      // calcTotalSumOfSelectedExtras: function() {
      //   return this.extras.reduce(function(prevTotal, item) {
      //     if (item.selected)
      //       return prevTotal + (item.quantity * item.cost)
      //     return prevTotal
      //   }, 0)
      // }
    },
    methods: {
      calculateTotalSum: function() {
        this.isExtraVisible = false;
        // генерируем событие 'calculateTotal' и передаём итоговую сумму
        this.$emit('calculateTotal', this.id, this.total);
      }
    },
    data () {
      return {
        // id2:id,
        // total,
        isExtraVisible,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Quantity', value: 'calories' },
          { text: 'Unit Price', value: 'fat' },
          { text: 'Cost', value: 'carbs' },
          { text: 'Total', value: 'protein' },
        ],
        extras: [
          {
            value: false,
            name: 'The Precinct Package',
            quantity: 1,
            unit_price: '-',
            cost: 300,
            selected: true,
          },
          {
            value: false,
            name: 'The Day Delegate Package',
            quantity: 1,
            unit_price: '-',
            cost: 200,
            selected: true,
          },
          {
            value: false,
            name: 'Tea And Coffee',
            quantity: 10,
            unit_price: '-',
            cost: 10,
            selected: true,
          },
          {
            value: false,
            name: 'Polycom',
            quantity: 1,
            unit_price: '-',
            cost: 50,
            selected: true,
          },
          {
            value: false,
            name: 'Projector and Screen',
            quantity: 1,
            unit_price: '-',
            cost: 50,
            selected: true,
          },
          {
            name: 'FlipChart',
            quantity: 1,
            unit_price: '-',
            cost: 50,
            selected: true,
          },
          {
            name: 'Whiteboard',
            quantity: 1,
            unit_price: '-',
            cost: 50,
            selected: true,
          }
        ]
      }
    }
  }
</script>
