<template>
  <div class="flex items-center mt-4">
    <MenuIcon class="md:w-1/12 lg:ml-6"/>
    <TabsMenu class="md:w-2/12 lg:ml-6"/>
    <SearchBar class="md:w-8/12 lg:ml-6 lg:w-8/12"/>
    <LoginIcon class="md:w-1/12 lg:ml-6"/>
  </div>
</template>
<script setup lang="ts">
import TabsMenu from "../Molecules/TabsMenu.vue";
import MenuIcon from "../Atoms/MenuIcon.vue";
import SearchBar from "../Molecules/SearchBar.vue";
import LoginIcon from "../Atoms/LoginIcon.vue";
</script>
