<template>
  <div class="max-w-4xl mx-auto py-10 px-6">
    <header>
      <h1 class="text-2xl font-display font-bold">{{ meal.name }}</h1>
      <div class="flex items-center justify-between">
        <div>
          <span
            class="text-sm capitalize"
            v-for="category in meal.categories"
            :key="category.id"
            >{{ category.name }}.
          </span>
        </div>
      </div>
      <hr />
    </header>

    <div class="my-12 relative">
      <img :src="meal.image" alt="" />

      <div
        class="absolute bottom-4 right-4 flex gap-1 items-center px-3 py-1 rounded-full border bg-purple-50 shadow"
      >
        <TimerIcon class="w-4 h-4 text-grey-500" />
        <span class="text-sm">{{ meal.cooking_time }}</span>
      </div>
    </div>

    <div>
      <p class="font-display font-bold text-lg">Ingredients:</p>
      <div v-for="(group, name) in ingredientGroups">
        <p class="font-semibold" v-show="name !== 'main'">{{ name }}</p>
        <ul class="my-4 list-disc list-inside">
          <li v-for="ingredient in group">
            <span class="capitalize">{{ ingredient.description }}</span>
            <span v-show="ingredient.quantity">
              - {{ ingredient.quantity }}</span
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="my-12">
      <p class="font-display font-bold text-lg">Instructions</p>
      <div class="prose" v-html="meal.instructions"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data } = await useFetch(
  `${config.public.apiBase}/free-recipes/${route.params.id}`
);

const meal = computed(() => data.value.data);

const ingredientGroups = computed(() => {
  return meal.value.ingredients.reduce((carry, ingredient) => {
    if (carry.hasOwnProperty(ingredient.group)) {
      carry[ingredient.group].push(ingredient);
      return carry;
    }
    carry[ingredient.group] = [ingredient];
    return carry;
  }, {});
});
</script>
