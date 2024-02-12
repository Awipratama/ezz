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
      images: null,
      category: 'all'
    };
  },
  created() {
    this.img();
  },
  methods: {
    isActive(category) {
      return this.category === 'all' || this.category === category;
    },
    addClassActive(category) {
      return {
        active: this.category === category
      };
    },
    handleFiter(category) {
      this.category = category;
    },
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
  <Navigation active="galery" />
  <section class="hero text-center">
    <h3 class="sub-title"><span>Ezzy</span> Hotel</h3>
    <h1 class="hero-title text-white">Gallery</h1>
  </section>
  <section class="galery py-5 container">
    <div class="filter d-flex flex-wrap list-unstyled justify-content-center pb-5">
      <li class="px-3">
        <span :class="addClassActive('all')" class="text-filter" @click="handleFiter('all')"
          >All</span
        >
      </li>
      <li class="px-3">
        <span :class="addClassActive('bar')" class="text-filter" @click="handleFiter('bar')"
          >Bar</span
        >
      </li>
      <li class="px-3">
        <span @click="handleFiter('lobby')" :class="addClassActive('lobby')" class="text-filter"
          >Lobby</span
        >
      </li>
      <li class="px-3">
        <span @click="handleFiter('room')" :class="addClassActive('room')" class="text-filter"
          >Rooms</span
        >
      </li>
      <li class="px-3">
        <span
          @click="handleFiter('restaurant')"
          :class="addClassActive('restaurant')"
          class="text-filter"
          >Restaurant</span
        >
      </li>
    </div>
    <div class="row gy-4">
      <template v-for="img in images" :key="img">
        <div class="col-4" v-if="isActive(img.category)">
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
.img-wrapper img {
  transition: all 500ms;
}

.img-wrapper img:hover {
  transform: scale(1.2);
}

.img-wrapper {
  overflow: hidden;
}

.text-filter {
  padding: 5px 15px;
  border-radius: 10px;
  transition: all 500ms;
}
.text-filter.active {
  color: white;
  background-color: black;
}
.filter {
  cursor: pointer;
}
</style>
