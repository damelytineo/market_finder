<template>
  <div id="app">
    <LogIn v-if="!currentUser" @login="setCurrentUser" />
    <HomePage v-else :currentUser="currentUser" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import LogIn from "./views/LogIn.vue";
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",

  components: {
    LogIn,
    HomePage,
  },

  setup() {
    const currentUser = ref(null);

    const setCurrentUser = (user) => {
      currentUser.value = user;
    };

    const handleLogin = () => {
      fetch("http://localhost:3000/logged_in", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.logged_in) {
            setCurrentUser(data.user);
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    };

    onMounted(() => {
      handleLogin();
    });

    return {
      currentUser,
      setCurrentUser,
    };
  },
};
</script>