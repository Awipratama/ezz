<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
    components: {
        Navigation: MainNavigation
    }
}
</script>

<template>
    <Navigation />
    <section class="hero">
        <div class="main-img">
            <img src="@/assets/img/landing-page/room01.jpg" alt="">
        </div>
        <div class="hero-title-content">
            <div class="hero-text d-flex justify-content-center">
                <h5>Ezzy Hotel</h5><br />
                <h3 class="text-uppercase">Accomodation</h3>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-img img {
    width: 100%;
    height: 100vh;
    margin-top: -20%;
}
</style>