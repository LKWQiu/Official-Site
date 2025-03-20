<template>
  <div class="centered-content">
    <div class="left-box">
      <h2>Engineering</h2>
    </div>
    <div class="right-box">
      <h2>Science</h2>
    </div>
  </div>
</template>

<style scoped>
.centered-content {
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start;
  height: 100%; 
  width: 100vw; 
  margin: 0; 
  padding: 0; 
  gap: 20px;
}

.left-box, .right-box {
  flex: 1; 
  border-radius: 0;
  background-color: #f9f9f9;
  margin: 0; 
  height: 100%; 
  padding: 20px; 
}

.left-box h2, .right-box h2 {
  margin: 0;
  color: #220901;
  font-size: 1.5em;
}
</style>
