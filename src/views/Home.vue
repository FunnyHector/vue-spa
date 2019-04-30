<template>
  <div>
    <home-landing></home-landing>
    <home-details></home-details>
  </div>
</template>

<script>
import HomeLanding from '../components/HomeLanding';
import HomeDetails from '../components/HomeDetails';

export default {
  name: 'home',
  components: {
    HomeLanding,
    HomeDetails
  }
};
</script>
