<template>
  <!-- `fluid` property will extend the page to its full width -->
  <!-- `fill-height` property will automatically adjust the container to have a height of 100% of the screen -->
  <v-container fluid fill-height class="home-landing">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">
        HEALTHY MEALS
      </div>
      <!-- `mb-3` applies a margin-bottom of 3 -->
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        FOR YOUR TABLE
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.
      </div>
      <!-- `mt-5` applies a margin-top of 5 -->
      <v-btn fab class="mt-5 brown darken-4">
        <!-- Just put the icon name in <v-icon> tag -->
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeLanding'
};
</script>

<style scoped>
.home-landing {
  background: url('http://source.unsplash.com/0BhSKStVtdM');
  background-size: cover;
  width: 100%;
  height: 100%;
  max-height: 100vh;
}
</style>
