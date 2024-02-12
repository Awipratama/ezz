<script>
export default {
  props: {
    active: String,
    pad: Boolean,
    noResponsivePad: Boolean
  },
  data() {
    return {
      navHeight: 0,
      controller: null
    };
  },
  methods: {
    isActive(state) {
      return {
        active: this.active === state
      };
    },
    handleLoad(signalAbort) {
      const height = this.$refs.nav.clientHeight;
      this.navHeight = height;

      if (!this.noResponsivePad) {
        document.body.style.setProperty('--nav-height', height + 'px');
      }
      if (this.pad) {
        document.body.style.paddingTop = height + 'px';
      }
      window.addEventListener(
        'scroll',
        () => {
          this.handleScroll();
        },
        { signal: signalAbort }
      );
      window.addEventListener(
        'resize',
        () => {
          this.handleScroll();
        },
        { signal: signalAbort }
      );
      this.handleScroll();
    },
    handleScroll() {
      /**@type {HTMLElement} */
      const nav = this.$refs.nav;
      if (window.innerWidth < 992) {
        nav.classList.add('nav-move');
        return;
      }
      nav.classList.toggle('nav-move', document.documentElement.scrollTop > 10);
    },
    handleMounted() {
      const controller = new AbortController();
      const { signal } = controller;
      this.controller = controller;
      if (document.readyState === 'complete') {
        this.handleLoad(signal);
        return;
      }
      window.addEventListener(
        'load',
        () => {
          this.handleLoad(signal);
        },
        { signal }
      );
    }
  },
  beforeUnmount() {
    this.controller.abort();
  },

  beforeRouteUpdate() {
    this.handleMounted();
  },
  mounted() {
    this.handleMounted();
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light top-0 left-0 px-3 position-fixed" ref="nav">
    <div class="container py-1">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/generic/logo.png" width="80" class="me-2" />
        <span class="d-none d-md-inline">
          <span class="text-brand-orange">Ezzy</span>
          <span class="text-brand-main">Hotel</span>
        </span>
      </a>
      <button class="btn btn-white border d-block d-md-none" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header text-uppercase d-flex align-items-center d-block d-md-none">
          <h5 id="offcanvasRightLabel"><span>Ezzy</span> Hotel</h5>
          <button type="button" class="btn-close text-reset d-block d-md-none" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-block d-md-none">
          <ul class="navbar-nav">
            <li class="nav-item" :class="isActive('home')">
              <router-link class="nav-link fs-3 px-3" to="/"><i class="bi bi-house-add fs-1 pe-2"></i> Home</router-link>
            </li>
            <li class="nav-item" :class="isActive('accomodation')">
              <router-link class="nav-link fs-3 px-3" to="/accomodation"><i class="bi bi-calendar-check fs-1 pe-2"></i>
                Accomodation</router-link>
            </li>
            <li class="nav-item" :class="isActive('dining')">
              <router-link class="nav-link fs-3 px-3" to="/dining">Dining</router-link>
            </li>
            <li class="nav-item" :class="isActive('contact')">
              <router-link class="nav-link fs-3 px-3" to=""><i class="bi bi-person-circle fs-1 pe-2"></i>
                Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav d-flex">
          <li class="nav-item" :class="isActive('home')">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/accomodation">Accomodation</a>
          </li>
          <li class="nav-item" :class="isActive('dining')">
            <router-link class="nav-link" to="/dining">Dining</router-link>
          </li>
          <li class="nav-item" :class="isActive('contact')">

            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  z-index: 99999;
  width: 100%;
  transition: all 200ms;
}

.nav-link {
  color: white;
}

.text-brand-main {
  color: white;
  margin-left: 5px;
}

.nav-move {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
  color: black;
}

.nav-move .text-brand-main {
  color: black;
}

.nav-move .nav-link {
  color: black;
}

.text-brand-orange {
  color: orange;
}

.navbar-brand {
  font-size: 1.6rem;
  font-weight: 500;
}

.nav-item.active .nav-link {
  color: #ed117f;
}

.nav-item .nav-link:hover {
  color: #117fb4;
}

.nav-item .nav-link {
  font-weight: 600;
}

.navbar-nav {
  gap: 10px;
}

.offcanvas {
  width: 85%;
}

.offcanvas-header::after {
  content: '';
  text-decoration: none;
  width: 90%;
  height: 8%;
  position: absolute;
  border-bottom: 2px solid gray;
}

.offcanvas-header h5 {
  font-style: oblique;
  font-size: 1.5rem;
  padding-top: 10px;
}

.offcanvas-header h5 span {
  color: orange;
}

.btn-close {
  margin-right: 10px;
  font-size: 1.5rem;
}
</style>
