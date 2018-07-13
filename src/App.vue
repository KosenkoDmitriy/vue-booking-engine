<template>
  <v-app id="app">
    <app-header></app-header>
    <app-content>
      <app-nav id="nav"></app-nav>
    </app-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// import AppNav from './components/AppNav.vue'
import AppContent from './components/AppContent.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    // AppNav,
    AppContent
  }
}
</script>
