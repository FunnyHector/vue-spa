<template>
  <!-- every Vue component is expected to have just one root in the template. So we create a <span> to wrap multiple
  elements -->
  <span>
    <!-- property `app` designates the component as part of the application layout. It is used for dynamically adjusting
    content sizing. When the side drawer slides out then the content on the screen will adjust accordingly. -->
    <!-- property `dark` applies the dark theme variant to the toolbar. This inverts all the text so instead of being
    black they are now white -->
    <v-navigation-drawer
      app
      dark
      disable-resize-watcher
      v-model="drawer"
      class="brown lighten-2"
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="brown darken-4">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <!-- This spacer is displayed when it's small devices, so that side icon and app title on two sides and balanced -->
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  // If here data is not a function, but a regular js object, like `data: { ... }`, then because of how JavaScript
  // works, every single instance of the component will share this property. This will create problems when this
  // component is mutated by multiple instances.
  // Using function to return a js object, this way every returned object is within the scope of the instance.
  data() {
    return {
      appTitle: 'Meal Prep',
      drawer: false,
      items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
    };
  }
};
</script>

<style scoped></style>
