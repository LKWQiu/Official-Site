<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navigateToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="logo-container">
        <img src="../icons/red-spider-lily.webp" alt="Red Spider Lily" class="lily" />
        <h1 class="site-title">The Lemon Garden</h1>
        <button class="home-button" @click="navigateToHome">Home</button>
      </div>
      <nav>
        <router-link to="/about">About Me</router-link>
        <router-link to="/certifications">Certifications</router-link>
        <router-link to="/career">Career</router-link>
        <router-link to="/extracurriculars">Extracurriculars</router-link>
      </nav>
    </header>
    <main class="content">
      <div v-if="route.path === '/'" class="welcome-box">
        <p>Welcome to my portfolio, The Lemon Garden.</p>
        <p>
          Hi, I'm Lucas Qiu! I'm so glad you stopped by. This is my personal portfolio where I showcase my projects, 
          life, and career journey. It's a place to explore my growth and achievements.
        </p>
      </div>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #220901;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lily {
  height: 50px;
}

.site-title {
  color: #B87333;
  font-size: 1.5em;
  margin: 0;
}

.home-button {
  background-color: #B87333;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #621708;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #B87333;
  font-weight: bold;
}

nav a:hover {
  color: #621708;
}

.content {
  display: flex;
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}

.welcome-box {
  width: 400px;
  height: 200px;
  padding: 20px;
  border: 2px solid #B87333;
  background-color: #220901;
  color: #B87333;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

router-view {
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
  color: #220901;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
