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
        <v-btn v-on:click="calculateTotalSum(total)">Done</v-btn>
    </v-toolbar>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          v-model="props.selected"
          primary
          hide-details
        ></v-checkbox>
      </td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.quantity }}</td>
      <td class="text-xs-right">{{ props.item.unit_price }}</td>
      <td class="text-xs-right">{{ props.item.cost }}</td>
      <td class="text-xs-right">${{ total = props.item.quantity * props.item.cost  }}</td>
    </template>
    <template slot="footer">
      <td colspan="100%" class="text-xs-right">
        <strong>Total: </strong>
      </td>
    </template>
  </v-data-table>
</div>

</div>
</template>

<script>
var total = 0;
var isExtraVisible = false;

  export default {

    name: "ExtraTable",
    // isExtraVisible: this.isVisible,
    // props: [
    //   'isExtraVisible'
    // ],
    props: {
      isVisible: Boolean,
      // total: Number,
    },
    methods: {
      calculateTotalSum: function() {
        this.isExtraVisible = !this.isExtraVisible;
        // генерируем событие 'remove' и передаём id элемента
        this.$emit('calculateTotal', this.total);
      }
    },
    data () {
      return {
        total,
        isExtraVisible: this.isVisible,

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
        desserts: [
          {
            value: false,
            name: 'The Precinct Package',
            quantity: 1,
            unit_price: '-',
            cost: 300,
          },
          {
            value: false,
            name: 'The Day Delegate Package',
            quantity: 1,
            unit_price: '-',
            cost: 200,
          },
          {
            value: false,
            name: 'Tea And Coffee',
            quantity: 10,
            unit_price: '-',
            cost: 10,
          },
          {
            value: false,
            name: 'Polycom',
            quantity: 1,
            unit_price: '-',
            cost: 50,
          },
          {
            value: false,
            name: 'Projector and Screen',
            quantity: 1,
            unit_price: '-',
            cost: 50,
          },
          {
            name: 'FlipChart',
            quantity: 1,
            unit_price: '-',
            cost: 50,
          },
          {
            name: 'Whiteboard',
            quantity: 1,
            unit_price: '-',
            cost: 50,
          }
        ]
      }
    }
  }
</script>
