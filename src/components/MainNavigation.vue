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
        document.body.style.paddinghrefp = height + 'px';
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
  <nav class="navbar navbar-expand-lg navbar-light hrefp-0 left-0 px-3 position-fixed" ref="nav">
    <div class="container py-1">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/generic/logo.png" width="80" class="me-2" />
        <span class="d-none d-md-inline">
          <span class="text-brand-orange">Ezzy</span>
          <span class="text-brand-main">Hotel</span>
        </span>
      </a>
      <button
        class="btn btn-white border d-block d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvas"
        data-bs-backdrop="false"
      >
        <div class="offcanvas-header text-uppercase d-flex flex-column d-lg-none">
          <button
            type="button"
            class="btn-close ms-auto p-3 text-reset d-block d-lg-none"
            data-bs-toggle="#offcanvas"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <div class="d-flex justify-content-center py-3 ps-2">
            <img src="@/assets/img/generic/logo.png" width="80" class="me-2" />
          </div>
          <h5 id="offcanvasRightLabel"><span>Ezzy</span> <span class="text-black">Hotel</span></h5>
        </div>
        <div class="offcanvas-body d-block d-lg-none">
          <ul class="navbar-nav">
            <li class="nav-item" :class="isActive('home')">
              <a class="nav-link px-3" href="/">
                <i class="bi bi-house-add nav-icon pe-2"></i>
                <span class="nav-description">Home</span>
              </a>
            </li>
            <li class="nav-item" :class="isActive('accomodation')">
              <a class="nav-link px-3" href="/accomodation">
                <i class="bi bi-calendar-check nav-icon pe-2"></i>
                <span class="nav-description">Accomodation</span>
              </a>
            </li>
            <li class="nav-item" :class="isActive('dining')">
              <a class="nav-link fs-3 px-3" href="/dining">
                <img src="@/assets/img/icon/food-icon.svg" class="icon-img me-2" />
                <span class="nav-description">Dining</span>
              </a>
            </li>
            <li class="nav-item" :class="isActive('contact')">
              <a class="nav-link fs-3 px-3" href="/contact">
                <i class="bi bi-person-circle pe-2 nav-icon"></i>
                <span class="nav-description">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav d-flex">
          <li class="nav-item" :class="isActive('home')">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item" :class="isActive('accomodation')">
            <a class="nav-link" href="/accomodation">Accomodation</a>
          </li>
          <li class="nav-item" :class="isActive('dining')">
            <a class="nav-link" href="/dining">Dining</a>
          </li>
          <li class="nav-item" :class="isActive('galery')">
            <a class="nav-link" to="/galery">Gallery</a>
          </li>
          <li class="nav-item" :class="isActive('contact')">
            <a class="nav-link" to="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.offcanvas-header {
  padding: 10px;
  border-bottom: 1px solid rgb(188, 136, 136);
}

.navbar {
  z-index: 99999;
  width: 100%;
  top: 0;
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
  max-width: 400px;
  width: 100%;
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
  font-size: 1rem;
}

.nav-description {
  font-size: 1rem;
  margin-left: 10px;
  vertical-align: middle;
}

.icon-img {
  width: 1.5rem;
}

.nav-icon {
  font-size: 1.5rem;
}
</style>
