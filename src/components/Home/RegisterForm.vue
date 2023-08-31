<template>
  <!--  <LoadingPage :loading="loading" :is-component="false">-->
  <div class="relative mt-6 mb-6 p-8 rounded-lg shadow-md" data-te-input-wrapper-init>
    <transition name="fade">
      <div class="space-y-4 md:space-y-6" action="#">
        <div>
          <MFP_Label for="email"><strong>Your Email</strong></MFP_Label>
          <input v-model="registerForm.email" type="email" name="email" id="email"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                 placeholder="name@company.com" required="">
        </div>
        <div>
          <MFP_Label for="password"><strong>Password</strong></MFP_Label>
          <input @input="checkPassword" v-model="registerForm.password" type="password" name="password" id="password"
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                 required="">
        </div>
        <div>
          <MFP_Label for="confirm-password"><strong>Confirm Password</strong></MFP_Label>
          <input v-model="registerForm.confirmPassword" type="confirm-password" name="confirm-password"
                 id="confirm-password" placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                 required="">
        </div>
        <!--                <div class="flex items-start">-->
        <!--                  <div class="flex items-center h-5">-->
        <!--                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">-->
        <!--                  </div>-->
        <!--                  <div class="ml-3 text-sm">-->
        <!--                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>-->
        <!--                  </div>-->
        <!--                </div>-->
        <div class="mt-8">
          <button
              :disabled="!validPassword"
              @click="register"
              type="submit"
              class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none
                focus:shadow-outline w-full">
            Create account
          </button>
        </div>
        <!--                <p class="text-sm font-light text-gray-500 dark:text-gray-400">-->
        <!--                  Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>-->
        <!--                </p>-->
      </div>
    </transition>
  </div>
  <!--  </LoadingPage>-->
  <Snackbar v-if="accountRegistered">
    <p class="text-green-700">Account Registered</p>
  </Snackbar>
</template>

<script setup lang="ts">
import {ref} from "vue";
import AuthService from "../../Services/AuthService";
import type {registerInterface} from "../../Interfaces/AuthInterface";
import router from "../../router";
import Snackbar from "../Atoms/Snackbar.vue";
import MFP_Label from "../Atoms/MFP_Label.vue";

const passwordLength = ref<number>(0);
const containsEightCharacters = ref<boolean>(false);
const containsNumber = ref<boolean>(false);
const containsUppercase = ref<boolean>(false);
const containsSpecialCharacter = ref<boolean>(false);
const validPassword = ref<boolean>(false);
const loading = ref<boolean>(false)
const accountRegistered = ref<boolean>(false);

const registerForm = ref<registerInterface>({
  email: '',
  password: '',
  confirmPassword: '',
});

const emit = defineEmits<{
  (e: 'switchTab'): void
}>();

const checkPassword = () => {
  passwordLength.value = registerForm.value.password.length;
  // console.log(registerForm.value.password === registerForm.value.confirmPassword)
  // samePassword.value = registerForm.value.password === registerForm.value.confirmPassword
  const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  containsEightCharacters.value = passwordLength.value > 8;

  containsNumber.value = /\d/.test(registerForm.value.password);
  containsUppercase.value = /[A-Z]/.test(registerForm.value.password);
  containsSpecialCharacter.value = format.test(registerForm.value.password);
  validPassword.value = containsEightCharacters.value === true &&
      containsSpecialCharacter.value === true &&
      containsUppercase.value === true &&
      containsNumber.value === true
  // samePassword.value === true;
}

const register = async () => {
  emit('switchTab');

  if (validPassword.value) {
    loading.value = true;
    // await AuthService.register(registerForm.value).then(res => {
    //   if (res.data.success) {
    //     //TODO => make popup good
    //     accountRegistered.value = res.data.success
    //     // router.replace({ path: '/dashboard' })
    //     emit('switchTab');
    //   }
    //   loading.value = false;
    // }).catch(e => {
    //   console.log('erreur register', e);
    //   loading.value = false;
    // });
  }
}
</script>

<style scoped>
</style>
