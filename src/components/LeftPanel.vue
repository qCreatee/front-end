<script setup>
import { ref } from "vue";

const logoUrl = ref(
  "https://freedesignfile.com/upload/2021/09/Halloween-graveyard-mascot-logo-vector.jpg"
);
</script>

<template>
  <div class="left-panel">
    <div class="branding">
      <h1 class="brand-name">qCreate</h1>
      <div class="logo-container">
        <img
          src="https://freedesignfile.com/upload/2021/09/Halloween-graveyard-mascot-logo-vector.jpg"
          alt="Logo"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-panel {
  background: linear-gradient(to bottom, #7bac4a, #e8f7d4);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;  
  padding: 24px;
}

.branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  z-index: 2;
}

.brand-name {
  color: white;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.logo-container {
  background-color: #006633;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ffcc00;
  overflow: hidden;
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dot:nth-child(1) {
  top: 20%;
  right: 30%;
}

.dot:nth-child(2) {
  top: 50%;
  right: 15%;
}

.dot:nth-child(3) {
  top: 70%;
  right: 25%;
}

@media (max-width: 768px) {
  .left-panel {
    height: 200px;
  }

  .logo-container {
    width: 80px;
    height: 80px;
  }

  .brand-name {
    font-size: 2rem;
  }
}
</style>
