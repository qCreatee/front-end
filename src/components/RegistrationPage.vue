<script setup>
import LeftPanel from './LeftPanel.vue'
import RegistrationForm from './RegistrationForm.vue'
</script>

<template>
  <div class="registration-container">
    <LeftPanel />
    <RegistrationForm />
  </div>
</template>

<style scoped>
.registration-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

@media (max-width: 768px) {
  .registration-container {
    flex-direction: column;
  }
}
</style>