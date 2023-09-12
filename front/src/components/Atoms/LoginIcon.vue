<template>
  <div class="flex justify-end mr-2">
    <router-link :to="isConnected ? '/account' : '/login'" class="transition duration-75 rounded flex items-center">
      <Icon icon="material-symbols:passkey" class="text-pink-700" :width="widthIcon"/>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {useConfigStore} from "../../Store/configStore";
const configStore = useConfigStore();
const {widthIcon} = configStore;
const isConnected = false;
</script>
<style scoped>

</style>
