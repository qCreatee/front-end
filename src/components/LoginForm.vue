<script setup>
import { ref } from "vue";

const username1 = ref("");
const password1= ref("");

const handleSubmit = () => {
  // This would contain login logic in a real app
  console.log("Login submitted");
};
</script>

<template>
  <div class="form-container">
    <div class="form-content">
      <h1 class="welcome-title">Welcome</h1>
      <p class="login-text">PLEASE LOGIN</p>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="input-group">
          <input
            type="text"
            v-model="username"
            placeholder="ENTER YOUR USERNAME"
            class="form-input"
          />
        </div>

        <div class="input-group">
          <input
            type="password"
            v-model="password"
            placeholder="ENTER YOUR PASSWORD"
            class="form-input"
          />
        </div>

        <button type="submit" class="login-button">Login</button>

        <router-link to="/register" class="register-link">DOESN'T HAVE ACCOUNT</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-content {
  width: 80%;
  max-width: 400px;
}

.welcome-title {
  color: #7bac4a;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0;
  text-align: center;
}

.login-text {
  color: #666;
  text-align: center;
  margin-bottom: 32px;
  font-size: 0.9rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  font-size: 0.9rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}

.form-input:focus {
  border-color: #7bac4a;
  box-shadow: 0 0 0 2px rgba(123, 172, 74, 0.2);
}

.form-input::placeholder {
  color: #374151;
}

.login-button {
  background-color: #7bac4a;
  color: white;
  border: none;
  align-self: center;
  padding: 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 16px;
  width: 200px;
}

.login-button:hover {
  background-color: #6a9b39;
  transform: translateY(-2px);
}

.login-button:active {
  transform: translateY(0);
}

.register-link {
  text-align: center;
  margin-top: 24px;
  color: #666;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
}

.register-link:hover {
  color: #7bac4a;
}

@media (max-width: 768px) {
  .form-container {
    padding: 40px 0;
  }

  .welcome-title {
    font-size: 2rem;
  }
}
</style>
