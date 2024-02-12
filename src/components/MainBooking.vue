<template>
  <section class="booking">
    <div class="container">
      <div class="custom-card shadow w-100">
        <div class="row justify-content-around">
          <div class="col-2 d-none d-md-block">
            <h5 class="input-text">Date</h5>
            <input type="datetime-local" name="Date" placeholder="Date" class="booking-input" />
          </div>
          <div class="col-2 d-none d-md-block">
            <h5 class="input-text">Check-in</h5>
            <input
              type="datetime-local"
              name="Checkin"
              placeholder="*Check-in"
              class="booking-input"
            />
          </div>
          <div class="col-2 d-none d-md-block">
            <h5 class="input-text">Check-out</h5>
            <input
              type="datetime-local"
              name="Checkout"
              placeholder="*Check-out"
              class="booking-input"
            />
          </div>
          <div class="col-2 d-none d-md-block">
            <h5 class="input-text">Promo Code</h5>
            <input type="number" name="Name" placeholder="*Promo Code" class="booking-input" />
          </div>
          <div class="col-lg-2 col-12">
            <router-link to=""><button class="booking-button">Book Now</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-card {
  padding-left: 50px;
}
.custom-card {
  padding: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  /* box-shadow: 1px 3px 0 3px gray; */
}
.booking-input {
  padding: 8px;
  border-radius: 8px;
}
.input-text {
  font-weight: 400;
  font-size: 16px;
}
.booking-button {
  width: 100%;
  padding: 8px;
  background: black;
  color: white;
  border-radius: 8px;
  margin-top: 27px;
  transition: all 500ms;
}
.booking-button:hover {
  background: white;
  color: black;
}
</style>
