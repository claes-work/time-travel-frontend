<script setup lang="ts">

</script>

<template>
  <section id="hero-section">
    <img src="@/assets/images/Geschichte-der-Zeit-Logo.png" alt="Geschichte der Zeit Logo" class="logo" />
    <h1>Eine Reise durch die Vergangenheit</h1>
  </section>
</template>

<style scoped>
#hero-section {
  width: 100%;
  height: 95vh;
  background-image:
      linear-gradient(to bottom, rgba(168, 139, 94, 0.84) 10%, rgba(126,106,75,0.65) 35%, rgba(53,53,53,0.73) 70%, rgba(0,0,0,1) 100%),
      url('@/assets/images/time-wallpaper-hero-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding-top: 100px;
  scroll-snap-align: start;
  scroll-behavior: smooth;
}

.logo {
  display: block;
  margin: 0 auto 20px;
  width: 100px;
}

h1 {
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 400;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
}

@media only screen and (min-width: 600px) {
  .logo {
    margin: 0 auto 40px;
  }

  h1 {
    font-size: 42px;
  }
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 120px;
    margin: 0 auto 35px;
  }

  h1 {
    font-size: 52px;
    line-height: 58px;
  }
}

@media only screen and (min-width: 991px) {
  h1 {
    font-size: 60px;
  }
}

@media only screen and (min-width: 1280px) {
  .logo {
    width: 140px;
    margin: 0 auto 50px;
  }
  
  h1 {
    font-size: 80px;
    max-width: 900px;
    line-height: 90px;
  }
}
</style>