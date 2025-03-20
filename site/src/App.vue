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
      </div>
      <nav>
        <button class="home-button" @click="navigateToHome">
          <img src="../icons/home-icon.png" alt="Home Icon" class="home-icon" />
        </button>
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
  padding: 15px 30px; /* Increased padding */
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 70px; /* Increased height */
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lily {
  height: 60px; /* Adjusted logo height */
}

.site-title {
  color: #B87333;
  font-size: 1.8em; /* Slightly increased font size */
  margin: 0;
}

nav {
  display: flex;
  align-items: center;
  gap: 25px; /* Increased gap between links */
}

.home-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-button:focus {
  outline: none; /* Remove focus outline */
}

.home-icon {
  width: 30px;
  height: 30px;
}

nav a {
  text-decoration: none;
  color: #B87333;
  font-weight: bold;
  font-size: 1.1em; /* Slightly increased font size */
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
