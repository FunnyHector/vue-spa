<template>
  <v-app>
    <!-- When the component is put in the html template, the name is hyphenated to <app-navigation> -->
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <!-- router-view tag will display the current page that you are on. When we are on the home page it will display
      the Home view. When we navigate to the about page it will display the about view. -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';

export default {
  name: 'App',
  components: { AppNavigation }
};
</script>

<style></style>
