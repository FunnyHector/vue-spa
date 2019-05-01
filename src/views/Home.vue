<template>
  <div>
    <home-landing></home-landing>
    <home-details></home-details>
    <home-plans></home-plans>
  </div>
</template>

<script>
import HomeLanding from '../components/HomeLanding';
import HomeDetails from '../components/HomeDetails';
import HomePlans from '../components/HomePlans';

export default {
  name: 'home',
  components: {
    HomeLanding,
    HomeDetails,
    HomePlans,
  }
};
</script>
