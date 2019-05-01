<template>
  <div>
    <home-landing></home-landing>
    <home-details></home-details>
    <home-plans></home-plans>
  </div>
</template>

<script>
import HomeLanding from '../components/home/Landing';
import HomeDetails from '../components/home/Details';
import HomePlans from '../components/home/Plans';

export default {
  name: 'home',
  components: {
    HomeLanding,
    HomeDetails,
    HomePlans,
  }
};
</script>
