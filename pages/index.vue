<template>
  <div class="max-w-7xl mx-auto pt-8">
    <div
      class="bg-gradient-to-tl to-white from-indigo-200 p-12 rounded-2xl flex justify-between gap-12 shadow-lg"
    >
      <div class="">
        <h1 class="text-5xl font-display font-black">
          TasteBox <br /><span>Recipes</span>
        </h1>
        <p class="text-2xl max-w-xl my-6">
          Delicious, easy to cook recipes for diverse and wholesome meals. Make
          yourself something special.
        </p>
      </div>

      <ClientOnly>
        <div
          class="w-80 h-56 p-3 rounded bg-white rotate-6 shadow-[0_2.1rem_2rem_-15px_rgba(0,0,0,0.3)] hidden md:block"
        >
          <img
            :src="randomMeal?.image"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
      </ClientOnly>
    </div>

    <div class="flex gap-12">
      <div class="w-80 shrink-0 p-6 bg-white mt-6 rounded-lg hidden md:block">
        <div>
          <p class="font-display mb-2">Categories:</p>
          <div v-for="category in categories">
            <label class="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                class="focus:ring-0 text-indigo-500 text-lg"
                :value="category.id"
                v-model="selectedCategories"
              />
              <span class="text-sm">{{ category.name }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <MealRecipeCard
          v-for="meal in filteredMeals"
          :key="meal.meal_id"
          :meal="meal"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
console.log(config.public.apiBase);
const { data } = await useFetch(`${config.public.apiBase}/free-recipes`);

const meals = computed(() => data.value.data || []);

const filteredMeals = computed(() => {
  return meals.value.filter((meal) => {
    if (!selectedCategories.value.length) return true;

    return meal.categories.find((cat) =>
      selectedCategories.value.includes(cat.id)
    );
  });
});
const randomMeal = computed(() => {
  if (!meals.value) return null;
  return meals.value[Math.floor(Math.random() * meals.value.length)];
});

const selectedCategories = ref([]);

const categories = computed(() => {
  if (!meals.value) return [];

  return meals.value.reduce((allCategories, meal) => {
    meal.categories.forEach((cat) => {
      if (!allCategories.find((c) => c.id === cat.id)) {
        allCategories.push(cat);
      }
    });
    return allCategories;
  }, []);
});
</script>
