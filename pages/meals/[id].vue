<template>
  <div class="max-w-4xl mx-auto py-10 px-6">
    <header>
      <h1>{{ meal.name }}</h1>
    </header>

    <div>
      <p>Ingredients:</p>
      <div v-for="(group, name) in ingredientGroups">
        <p>{{ name }}</p>
        <ul>
          <li v-for="ingredient in group">
            <span>{{ ingredient.description }}</span> -
            <span>{{ ingredient.quantity }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <img :src="meal.image" alt="" />
    </div>

    <div>
      <div v-html="meal.instructions"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data } = await useFetch(
  `http://localhost/api/free-recipes/${route.params.id}`
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
