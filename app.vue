<template>
  <div class="min-h-screen flex flex-col">
    <div class="shadow px-6 h-16 flex items-center justify-between">
      <div>
        <NuxtLink class="flex gap-3 items-center" to="/">
          <LogoIcon class="text-emerald-600 w-6 h-6" />
          <span class="font-display font-bold">TasteBox Recipes</span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex-1 px-6">
      <NuxtPage></NuxtPage>
    </div>

    <div class="py-4 px-6">
      <p class="text-gray-500 text-sm text-center">
        Copyright TasteBox {{ year }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
