import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMemberStore = defineStore("test", () => {
  const profile = ref();
  const getprofile = computed(() => {
    return profile + "这种方式可以直接访问定义的变量， 没有this 的困扰";
  });
  const setProfile = (val: number) => {
    profile.value = val;
  };
  const clearProfile = () => {
    profile.value = undefined;
  };
  return { profile, getprofile, setProfile, clearProfile };
});
