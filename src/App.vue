<template>
  <div id="app">
    <Nav id="nav"></Nav>
    <!--<app-view>
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </app-view>
    -->
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  export default {
    name: 'app',
    components: {
      Nav
    }
  }
</script>
