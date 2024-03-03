<template>
  <div class="max-w-4xl mx-auto pt-8">
    <div>
      <h1 class="text-2xl font-display font-bold">TastBox Recipes</h1>
      <p class="text-lg my-6">
        Simple and delicious recipes for diverse and wholesome meals.
      </p>
    </div>
    <div class="">
      <div
        v-for="meal in data.data"
        :key="meal.meal_id"
        class="flex flex-col md:flex-row my-6 shadow rounded-lg overflow-hidden"
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
        <div class="px-4 pb-2 pt-3 md:pt-0 flex flex-col items-start">
          <div class="flex-1">
            <NuxtLink
              class="font-display font-semibold"
              :to="`/meals/${meal.meal_id}`"
              ><p>{{ meal.name }}</p></NuxtLink
            >
            <p class="text-gray-500 text-sm">{{ meal.description }}</p>
          </div>
          <NuxtLink
            class="text-xs bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded font-semibold mt-4"
            :to="`/meals/${meal.meal_id}`"
            >View Recipe</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
console.log(config.public.apiBase);
const { data } = await useFetch(`${config.public.apiBase}/free-recipes`);
</script>
