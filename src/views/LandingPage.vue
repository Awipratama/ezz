<script>
import MainNavigation from '@/components/MainNavigation.vue';
export default {
  components: {
    Navigation: MainNavigation
  }
};
</script>

<template>
  <Navigation />
  <section class="hero">
    <video autoplay muted loop class="w-100 h-100 hero-video">
      <source src="@/assets/video/highlight.mp4" type="video/mp4" />
    </video>
    <div class="hero-text-content-wrapper">
      <div class="hero-text-content">
        <h2 class="hero-welcome">Welcome to</h2>
        <h1 class="hero-brand">
          <span class="hero-brand-ezzy">Ezzy</span>

          <span class="ms-3 hero-brand-hotel">Hotel</span>
        </h1>
      </div>
    </div>
  </section>
  <section class="about container">
    <div class="row">
      <div class="col-6 text-capitalize text-center d-flex flex-column justify-content-center">
        <div class="px-5">
          <h3 class="about-brand">Ezzy hotel</h3>
          <h1 class="about-welcome-title">Welcome</h1>
          <div class="text-center about-content">
            <p>
              Overviewing the stunning Jimbaran Bay, 15 minutes from Ngurah Rai International air
              port 10 minutes to Uluwatu Temple, Dreamland Beach, Pandawa Beach, Jimbaran Fish
              restaurant, New Kuta Water park, New Kuta Golf course, and 2 minutes to Garuda Wisnu
              Kencana.
            </p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="about-img">
          <img src="@/assets/img/landing-page/about-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  overflow: hidden;
  color: white;
  height: max-content;
  position: relative;
}

.hero-video {
  filter: brightness(0.4);
  width: calc(100% + 10px);
}

.hero-text-content {
  text-align: center;
}

.hero-text-content-wrapper {
  padding: 20px 0;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}

.hero-welcome {
  font-size: clamp(1rem, 5vw + 0.5rem, 3rem);
  font-family: 'Courgette', sans-serif;
  font-weight: 600;
  position: relative;
  animation: 1s forwards welcome-showup;
}

@keyframes welcome-showup {
  0% {
    opacity: 0;
    top: -20px;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: 0;
  }
}

.hero-brand {
  text-transform: capitalize;
  font-size: clamp(1.5rem, 10vw + 0.5rem, 4.5rem);
  font-weight: 500;
  vertical-align: middle;
}

.hero-brand-ezzy {
  /* color: orange; */
  font-weight: 600;
  position: relative;
  animation: 2s 1s forwards hero-ezzy-showup;
  opacity: 0;
}

@keyframes hero-ezzy-showup {
  0% {
    color: white;
    left: -50px;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    left: 0;
    opacity: 1;
    color: orange;
  }
}

.hero-brand-hotel {
  position: relative;
  animation: 2s 1s forwards hero-hotel-showup;
  opacity: 0;
}

@keyframes hero-hotel-showup {
  0% {
    right: -50px;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    right: 0;
    opacity: 1;
  }
}

.about {
  padding-block: 100px;
}

.about-brand {
  font-size: 2.3rem;
  font-family: 'Courgette', sans-serif;
  color: #ed117f;
}

.about-welcome-title {
  text-transform: uppercase;
  font-size: 3.5rem;
  position: relative;
  font-weight: 600;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

.about-welcome-title::before {
  position: absolute;
  content: '';
  background-color: black;
  width: 25%;
  border-radius: 8px;
  height: 5px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
}
.about-content p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.1;
  color: #666666;
}

.about-img {
  width: 100%;
  max-width: 450px;
  margin-inline: auto;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
}

.about-img > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms;
}

.about-img > img:hover {
  transform: scale(1.2);
}

@media only screen and (min-width: 500px) {
  .hero-text-content {
    margin-top: -50px;
  }
}
</style>
