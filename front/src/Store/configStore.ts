import { defineStore } from "pinia";
import {ref} from "vue";
import {useStorage} from "@vueuse/core";

interface accountSettingsInterface {
    public: boolean,
    emailNotifications: boolean
}
const STORAGE_SETTINGS = 'account-settings';export const useConfigStore = defineStore('configStore', () => {
    const widthIcon = ref<number>(50);
    const inDevelopment = ref<boolean>(false)

    const accountSettings = useStorage<accountSettingsInterface>(STORAGE_SETTINGS, {
        public: false,
        emailNotifications: false
    }, localStorage, { mergeDefaults: true});


    function setAccountSettings(newValue: accountSettingsInterface) {
        accountSettings.value = newValue;
    }


    function getAccountSettings() {
        return JSON.parse(JSON.stringify(accountSettings.value));
    }


    return {
        widthIcon,
        accountSettings,
        setAccountSettings,
        getAccountSettings,
    }
});
