<template>
  <div>
    <div>{{ data.data.length }} free recipes!</div>
    <div v-for="meal in data.data" :key="meal.meal_id">
      <NuxtLink :to="`/meals/${meal.meal_id}`"
        ><p>{{ meal.name }}</p></NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("http://localhost/api/free-recipes");
</script>
