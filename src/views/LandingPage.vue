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
    <div class="hero">
        <video autoplay muted loop class="w-100 h-100 hero-video">
            <source src="@/assets/video/highlight.mp4" type="video/mp4" />
        </video>
        <div class="hero-text-content-wrapper">
            <div class="hero-text-content">
                <h2 class="hero-welcome">
                    Welcome to
                </h2>
                <h1 class="hero-brand">
                    <span class="hero-brand-ezzy">Ezzy</span>

                    <span class="ms-3 hero-brand-hotel">Hotel</span>
                </h1>
            </div>
        </div>
    </div>
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

@media only screen and (min-width: 500px) {
    .hero-text-content {
        margin-top: -50px;
    }
}
</style>