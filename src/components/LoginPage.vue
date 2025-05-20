<script setup>
import LeftPanel from "./LeftPanel.vue";
import LoginForm from "./LoginForm.vue";
</script>

<template>
  <div class="login-container">
    <LeftPanel />
    <LoginForm />
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
}
</style>
