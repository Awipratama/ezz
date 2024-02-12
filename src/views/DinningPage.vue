<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
  components: {
    MainFooter: MainFooter,
    Navigation: MainNavigation
  }
};
</script>
<template>
    <Navigation :noResponsivePad="true" active="dining" />
    <section class="hero">
        <h5 class="sub-text">
            <span class="text-orange">Ezzy</span> <span>Hotel</span>
        </h5>
        <h4 class="hero-title">Dining</h4>
    </section>
    <section class=" dining-place container">
        <h5 class="dining-place-title text-center">Bar and Restaurant</h5>
        <div class=" dining-subhead-description">
            ligula condimentum eros, eget euismod tortor diam eget urna. Suspendisse fermentum velit vel sem egestas
            accumsan. Etiam ligula ipsum, imperdiet in egestas vitae, porta at neque.
        </div>
        <div class="row gy-5">
            <div class="col-lg-6 col-12">
                <div class="shadow-lg px-4 py-4 rounded">
                    <div>
                        <img src="@/assets/img/dinning/restaurant.jpg" class="w-100 darken" />
                    </div>
                    <h5 class="dining-place-name">
                        <span class="text-brand me-2">Ezzy</span>
                        <span>Restaurant</span>
                    </h5>
                    <div class="dining-place-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum tempus metus vitae
                        porttitor. Integer urna dui, rhoncus a bibendum quis, mattis non odio. Sed eu est sit amet lacus
                        ullamcorper dictum. Mauris viverra pulvinar dapibus. Ut velit neque, cursus ut efficitur sed,
                        aliquam in elit. Suspendisse vitae nisl non tortor sollicitudin rutrum ac a enim. Vivamus tristique
                        lorem ut dolor feugiat, gravida vestibulum orci iaculis. Donec suscipit accumsan libero, ac sodales
                        neque tincidunt vel. Vivamus et tempor magna. Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Nam ullamcorper elementum mauris a sollicitudin. Aliquam quis luctus libero, a sodales
                        ante. Nulla rutrum ipsum neque, id lacinia lacus congue quis.
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="shadow-lg px-4 py-4 rounded">
                    <div>
                        <img src="@/assets/img/dinning/bar.jpg" class="w-100 darken" />
                    </div>
                    <h5 class="dining-place-name">
                        <span class="text-brand">
                            Ezzy
                        </span>
                        <span>bar</span>
                    </h5>
                    <div class="dining-place-description">
                        Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem tristique, varius
                        libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas ligula feugiat vel. In tempor
                        sapien eu felis molestie, eu sodales est ultricies. Sed auctor augue urna, quis sagittis nibh
                        elementum nec. Maecenas vulputate pretium lacus, vel dictum orci porta eget. Praesent id pharetra
                        neque. Nunc non sodales erat. Sed tempus tincidunt eros sit amet sodales. Sed eu pretium elit, vel
                        hendrerit nulla. In hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a
                        feugiat ante faucibus. Sed nec bibendum nisl.
                    </div>
                </div>
            </div>

        </div>

    </section>
    <section class="dining-experience">
        <div class="container">
            <h5 class="dining-experience-title text-center">Dining experience</h5>
            <h6 class="dining-subhead-description px-4">
                ligula condimentum eros, eget euismod tortor diam eget urna. Suspendisse fermentum velit vel sem egestas
                accumsan. Etiam ligula ipsum, imperdiet in egestas vitae, porta at neque.
            </h6>
            <div class="dining-experience-content-wrapper">
                <div class="row gy-4">
                    <div class="col-lg-6 col-12 dining-experience-img-wrapper">
                        <img src="@/assets/img/dinning/bar.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 dining-experience-content">
                        <h5 class="content-title">
                            Bar view
                        </h5>
                        <div class="content-description">
                            Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem tristique,
                            varius
                            libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas ligula feugiat vel. In
                            tempor
                            sapien eu felis molestie, eu sodales est ultricies. Sed auctor augue urna, quis sagittis nibh
                            elementum nec. Maecenas vulputate pretium lacus, vel dictum orci porta eget. Praesent id
                            pharetra
                            neque. Nunc non sodales erat. Sed tempus tincidunt eros sit amet sodales. Sed eu pretium elit,
                            vel
                            hendrerit nulla. In hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a
                            feugiat ante faucibus. Sed nec bibendum nisl.
                        </div>
                    </div>
                </div>
                <div class="row gy-4">
                    <div class="col-lg-6 col-12 dining-experience-img-wrapper">
                        <img src="@/assets/img/dinning/1.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 dining-experience-content">
                        <h5 class="content-title">
                            Beautiful view
                        </h5>
                        <div class="content-description">
                            Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem tristique,
                            varius
                            libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas ligula feugiat vel. In
                            tempor
                            sapien eu felis molestie, eu sodales est ultricies. Sed auctor augue urna, quis sagittis nibh
                            elementum nec. Maecenas vulputate pretium lacus, vel dictum orci porta eget. Praesent id
                            pharetra
                            neque. Nunc non sodales erat. Sed tempus tincidunt eros sit amet sodales. Sed eu pretium elit,
                            vel
                            hendrerit nulla. In hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a
                            feugiat ante faucibus. Sed nec bibendum nisl.
                        </div>
                    </div>
                </div>
                <div class="row gy-4">
                    <div class="col-lg-6 col-12 dining-experience-img-wrapper">
                        <img src="@/assets/img/dinning/restaurant-view.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 dining-experience-content">
                        <h5 class="content-title">
                            Restaurant view
                        </h5>
                        <div class="content-description">
                            Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem tristique,
                            varius
                            libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas ligula feugiat vel. In
                            tempor
                            sapien eu felis molestie, eu sodales est ultricies. Sed auctor augue urna, quis sagittis nibh
                            elementum nec. Maecenas vulputate pretium lacus, vel dictum orci porta eget. Praesent id
                            pharetra
                            neque. Nunc non sodales erat. Sed tempus tincidunt eros sit amet sodales. Sed eu pretium elit,
                            vel
                            hendrerit nulla. In hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a
                            feugiat ante faucibus. Sed nec bibendum nisl.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MainFooter />
</template>

<style scoped>
.darken {
  filter: brightness(75%);
}

.sub-text {
    font-size: 2rem;
    font-family: 'Courgette', sans-serif;
    text-align: center;
}

.text-orange {
    color: orange;
}

.hero {
  color: white;
  background-repeat: no-repeat;
  padding-block: 160px 150px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('@/assets/img/dinning/restaurant.jpg');
}

.hero-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;
}

.dining-place {
  padding-top: 30px;
  padding-bottom: 100px;
  max-width: 1200px;
}

.dining-place img {
  border-radius: 8px;
}

.dining-place-title {
  font-size: 1.6rem;
}

.dining-place-name {
  margin-block: 14px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
}

.dining-place-description {
  font-size: 0.8rem;
  line-height: 1.7;
}

.dining-subhead-description {
  padding-inline: 50px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 40px;
}

.dining-experience {
  padding-top: 40px;
  background-color: #f3efea;
  padding-bottom: 30px;
}

.dining-experience-title {
  text-transform: capitalize;
  font-size: 1.6rem;
  margin-bottom: 30px;
}

.text-brand {
  color: orange;
  font-weight: 500;
}

.dining-experience-img-wrapper {
  overflow: hidden;
  border-radius: 8px;
  background-color: inherit;
  max-width: 100%;
}

.dining-experience-img-wrapper img {
  width: 100%;
  aspect-ratio: 646/431;
  margin-bottom: 20px;
  border-radius: 8px;
  object-fit: cover;
}

.dining-experience-content {
  padding: 30px;
  margin-block: auto;
}

.dining-experience-content .content-title {
  font-size: clamp(0.9rem, 4vw + 0.5rem, 1.6rem);
  font-weight: 600;
  text-transform: uppercase;
}

.dining-experience-content .content-description {
  font-size: 0.9rem;
  line-height: 1.7;
}

.dining-experience-content-wrapper > .row {
  padding: 50px 10px;
}

.dining-experience-content-wrapper > .row:nth-child(even) .dining-experience-content {
  order: -1;
}

/* .dining-experience-content-wrapper>.row:nth-child(even) . */

@media only screen and (max-width: 992px) {
  .dining-experience-content {
    padding: 0 15px;
  }

  .dining-experience-content-wrapper > .row:nth-child(even) .dining-experience-content {
    order: 2;
  }
}
</style>
