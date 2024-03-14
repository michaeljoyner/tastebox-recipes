<template>
  <div
    class="flex flex-col md:flex-row my-6 shadow rounded-lg overflow-hidden bg-white"
  >
    <div class="w-full md:w-64 shrink-0 overflow-hidden">
      <NuxtLink :to="`/meals/${meal.meal_id}`">
        <img
          :src="meal.image"
          class="w-full h-full object-cover hover:scale-105 transition-transform"
          alt=""
        />
      </NuxtLink>
    </div>
    <div class="px-4 pb-2 pt-3 md:pt-2 flex flex-col items-start">
      <div class="flex-1">
        <NuxtLink
          class="font-display font-semibold hover:text-indigo-500"
          :to="`/meals/${meal.meal_id}`"
          ><p>{{ meal.name }}</p></NuxtLink
        >
        <p class="text-gray-500 text-sm">{{ meal.description }}</p>
      </div>
      <div class="flex justify-end w-full">
        <NuxtLink
          class="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded font-semibold mt-4"
          :to="`/meals/${meal.meal_id}`"
          >View Recipe</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({ meal: Object });
</script>
