<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light top-0 left-0 px-3 position-fixed">
    <div class="container py-1">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/generic/logo.png" width="80" class="me-2" />
        <span>Ezzy</span> Hotel
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav d-flex">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accomodation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disabled</a>
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
</style>
