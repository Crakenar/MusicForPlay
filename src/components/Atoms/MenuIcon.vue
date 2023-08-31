<template>
  <div class="flex items-center">
    <Icon icon="jam:music" class="text-pink-700" :width="widthIcon"/>
    <h2 class="text-pink-700">MusicForPlay</h2>
  </div>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {useConfigStore} from "../../Store/configStore";
const configStore = useConfigStore();
const {widthIcon} = configStore;
</script>
<style scoped>

</style>
