<script>
export default {
  props: {
    active: String,
    pad: Boolean
  },

  methods: {
    isActive(state) {
      return {
        active: this.active === state
      };
    },
    handleNav() {
      const height = this.$refs.nav.clientHeight;
      document.body.style.setProperty('--nav-height', height + 'px');
      if (this.pad) {
        document.body.style.paddingTop = height + 'px';
      }
    }
  },
  mounted() {
    this.handleNav();
    window.addEventListener(
      'load',
      () => {
        this.handleNav();
      },
      { once: true }
    );
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light top-0 left-0 px-3 position-fixed" ref="nav">
    <div class="container py-1">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/generic/logo.png" width="80" class="me-2" />
        <span>Ezzy</span> Hotel
      </a>
      <button
        class="btn btn-white border"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header text-uppercase d-flex align-items-center">
          <h5 id="offcanvasRightLabel"><span>Ezzy</span> Hotel</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item" :class="isActive('home')">
              <router-link class="nav-link fs-3 px-3" to="/"
                ><i class="bi bi-house-add fs-1 pe-2"></i> Home</router-link
              >
            </li>
            <li class="nav-item" :class="isActive('accomodation')">
              <router-link class="nav-link fs-3 px-3" to="/accomodation"
                ><i class="bi bi-calendar-check fs-1 pe-2"></i> Accomodation</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-3 px-3" to="">Pricing</router-link>
            </li>
            <li class="nav-item" :class="isActive('contact')">
              <router-link class="nav-link fs-3 px-3" to=""
                ><i class="bi bi-person-circle fs-1 pe-2"></i> Contact</router-link
              >
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
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item" :class="isActive('contact')">
            <a class="nav-link" href="/contact">Contact</a>
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
  background: rgba(255, 255, 255, 0.9);
}

.navbar-brand span {
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
