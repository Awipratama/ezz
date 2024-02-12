<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
  components: {
    Navigation: MainNavigation,
    MainFooter: MainFooter
  },
  data() {
    return {
      images: null
    };
  },
  created() {
    this.img();
  },
  methods: {
    img() {
      const basePath = '../assets/img/galery';
      const resolveurl = (url) => {
        return new URL(basePath + url, import.meta.url);
      };
      this.images = [
        {
          path: resolveurl('/bar/bar02.jpg'),
          category: 'bar'
        },
        {
          path: resolveurl('/bar/bar01.jpg'),
          category: 'bar'
        },
        {
          path: resolveurl('/bar/bar01.jpg'),
          category: 'bar'
        },
        {
          path: resolveurl('/lobby/lobby01.jpg'),
          category: 'lobby'
        },
        {
          path: resolveurl('/lobby/lobby02.jpg'),
          category: 'lobby'
        },
        {
          path: resolveurl('/lobby/lobby03.jpg'),
          category: 'lobby'
        },
        {
          path: resolveurl('/room/room01.jpg'),
          category: 'room'
        },
        {
          path: resolveurl('/room/room02.jpg'),
          category: 'room'
        },
        {
          path: resolveurl('/room/room03.jpg'),
          category: 'room'
        },
        {
          path: resolveurl('/restaurant/rest01.jpg'),
          category: 'restaurant'
        },
        {
          path: resolveurl('/restaurant/rest01.jpg'),
          category: 'restaurant'
        },
        {
          path: resolveurl('/restaurant/rest01.jpg'),
          category: 'restaurant'
        }
      ];
    }
  }
};
</script>

<template>
  <Navigation />
  <section class="hero text-center">
    <h3 class="sub-title"><span>Ezzy</span> Hotel</h3>
    <h1 class="hero-title text-white">Galery</h1>
  </section>
  <section class="galery py-5 container">
    <div class="filter d-flex flex-wrap list-unstyled justify-content-center pb-5">
      <li class="px-3"><a href="" class="text-decoration-none text-black">All</a></li>
      <li class="px-3"><a href="" class="text-decoration-none text-black">Bar</a></li>
      <li class="px-3"><a href="" class="text-decoration-none text-black">Lobby</a></li>
      <li class="px-3"><a href="" class="text-decoration-none text-black">Rooms</a></li>
      <li class="px-3"><a href="" class="text-decoration-none text-black">Restaurant</a></li>
    </div>
    <div class="row gy-4">
      <template v-for="img in images" :key="img">
        <div class="col-4">
          <div class="img-wrapper">
            <img :src="img.path" alt="" class="w-100 rounded" />
          </div>
        </div>
      </template>
    </div>
  </section>
  <MainFooter />
</template>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url('@/assets/img/galery/main-galery.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 150px;
  padding-bottom: 150px;
}
.hero-title {
  font-size: 3.5rem;
  text-transform: uppercase;
}
.sub-title {
  font-family: 'Courgette', sans-serif;
  font-style: italic;
  color: white;
}
.sub-title span {
  color: orange;
}
.col-4 img {
  transition: all 500ms;
}

.col-4 img:hover {
  transform: scale(1.2);
}

.img-wrapper {
  overflow: hidden;
}
</style>
