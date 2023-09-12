<template>
  <!-- Email input -->
  <div class="relative mt-6 mb-6 p-8 rounded-lg shadow-md" data-te-input-wrapper-init>
    <div class="my-4">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input v-model="loginForm.email" type="email" name="email" id="email"
             class="bg-amber-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="name@company.com" required="">
    </div>
    <!-- Password input -->
    <div class="my-4">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input v-model="loginForm.password" type="password" name="password" id="password" placeholder="••••••••"
             class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required="">
    </div>
    <div class="mt-8">
      <button
          @click="login"
          type="submit"
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none
   focus:shadow-outline w-full">
        Se connecter
      </button>
    </div>
  </div>

  <!--  <div class="mb-6 flex items-center justify-between">-->
  <!--    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">-->
  <!--      <input-->
  <!--          class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"-->
  <!--          type="checkbox"-->
  <!--          value=""-->
  <!--          id="exampleCheck3"-->
  <!--          checked/>-->
  <!--      <label-->
  <!--          class="inline-block pl-[0.15rem] hover:cursor-pointer"-->
  <!--          for="exampleCheck3">-->
  <!--        Remember me-->
  <!--      </label>-->
  <!--    </div>-->
  <!--    <a-->
  <!--        href="#!"-->
  <!--        class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"-->
  <!--    >Forgot password?</a-->
  <!--    >-->
  <!--  </div>-->

  <!-- Submit button -->

  <!--    <a-->
  <!--        @click="showRegister"-->
  <!--        class="button text-center inline-block w-full rounded px-7 mt-8 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal-->
  <!--                   text-white shadow-[0_10px_18px_8px_#3b71ca]"-->
  <!--        data-te-ripple-color="light">-->
  <!--      Register-->
  <!--    </a>-->
</template>

<script setup lang="ts">

import {ref} from "vue";
import type {loginInterface} from "../../Interfaces/AuthInterface";
import AuthService from "../../Services/AuthService";
import router from "../../router";
// import CookieService from "../../Services/CookieService";

const loginForm = ref<loginInterface>({
  email: '',
  password: '',
});

const login = async () => {
  await router.replace({path: '/dashboard'})
  // await AuthService.login(loginForm.value).then(res => {
  //   if (res.data.success) {
  //     router.replace({path: '/dashboard'})
  //   }
  // });
}
</script>

<style scoped>

</style>
