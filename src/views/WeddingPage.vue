<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
    components: {
        Navigation: MainNavigation,
        MainFooter: MainFooter
    }
};
</script>
<template>
    <Navigation :noResponsivePad="true" />
    <section class="hero text-center">
        <h3 class="sub-title"><span>Ezzy</span> Hotel</h3>
        <h1 class="hero-title">Wedding</h1>
    </section>
    <section class="wedding py-5 text-center">
        <div>
            <h2 class="title-wedding">Rooftop Wedding Chapel</h2>
            <div>
                <img src="@/assets/img/wedding/rooftop-wedding.jpg" class=" rooftop-wedding" />
            </div>
            <p class="rooftop-description">
                If you are looking Rooftop Wedding ceremony, tying your knot in Bali, will be even more
                memorable in the brand new Roof Top wedding chapel with a stunning 360 views over Bali and
                Jimbaran Bay. get ready to explore a new life of togetherness. You will be able to celebrate
                your day with confidence.
            </p>
            <div class="quote">
                <h3>" Enjoy a Once in Lifetime Experience "</h3>
            </div>
        </div>
    </section>
    <section class="wedding-experience py-5">
        <div>
            <div class="wedding-experience-content-wrapper">
                <div class="row gy-4">
                    <div class="col-lg-6 col-12 wedding-experience-img-wrapper">
                        <img src="@/assets/img/wedding/wedding01.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 wedding-experience-content">
                        <h5 class="content-title">
                            Ceremony
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
                    <div class="col-lg-6 col-12 wedding-experience-img-wrapper">
                        <img src="@/assets/img/wedding/wedding02.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 wedding-experience-content">
                        <h5 class="content-title">
                            Honeymoon
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
                    <div class="col-lg-6 col-12 wedding-experience-img-wrapper">
                        <img src="@/assets/img/wedding/wedding03.jpg" alt="bar" class="w-100" />
                    </div>
                    <div class="col-lg-6 col-12 wedding-experience-content">
                        <h5 class="content-title">
                            Enjoy the Ceremony
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
.hero {
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('@/assets/img/wedding/wedding.jpg');
    padding-top: 150px;
    padding-bottom: 150px;
    background-size: cover;
    background-position: center;
    display: block;
    background-repeat: no-repeat;
}

.wedding {
    padding-inline: 20px;
}

.sub-title {
    font-style: italic;
    color: white;
    font-family: 'Courgette', sans-serif;
}

.sub-title span {
    color: orange;
}

.hero-title {
    font-size: 3.5rem;
    text-transform: uppercase;
    color: white;
}

.title-wedding {
    font-size: 1.5rem;
    text-align: center;
}

.title-wedding::before {
    content: '';
    width: 20%;
    height: ;
}

.rooftop-description {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.7;
}

.wedding>div {
    max-width: 800px;
    margin-inline: auto;

}

.rooftop-wedding {
    width: 100%;
    display: block;
    margin: 40px auto;
    border-radius: 8px;
    aspect-ratio: 5/3;
}

.quote {
    font-size: 18px;
    margin-top: 20px;
    text-transform: uppercase;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}

.wedding-experience {
    background-color: #F3EFEA;
    padding-inline: 30px;
}

.wedding-place {
    padding-top: 30px;
    padding-bottom: 100px;
    max-width: 1200px;
}

.wedding-place img {
    border-radius: 8px;
}

.wedding-place-title {
    font-size: 1.6rem;
}

.wedding-place-name {
    margin-block: 14px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
}

.wedding-place-description {
    font-size: 0.8rem;
    line-height: 1.7;
}

.wedding-subhead-description {
    padding-inline: 50px;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 40px;

}

.wedding-experience {
    padding-top: 40px;
    background-color: #F3EFEA;
    padding-bottom: 30px;
}

.wedding-experience-title {
    text-transform: capitalize;
    font-size: 1.6rem;
    margin-bottom: 30px;
}

.text-brand {
    color: orange;
    font-weight: 500;
}

.wedding-experience-img-wrapper {
    overflow: hidden;
    border-radius: 8px;
    background-color: inherit;
    max-width: 100%;
}

.wedding-experience-img-wrapper img {
    width: 100%;
    aspect-ratio: 646/431;
    margin-bottom: 20px;
    border-radius: 8px;
    object-fit: cover;
}


.wedding-experience-content {
    padding: 30px;
    margin-block: auto;
}

.wedding-experience-content .content-title {
    font-size: clamp(0.9rem, 4vw + 0.5rem, 1.6rem);
    font-weight: 600;
    text-transform: uppercase;
}

.wedding-experience-content .content-description {
    font-size: 0.9rem;
    line-height: 1.7;
}

.wedding-experience-content-wrapper>.row {
    padding: 50px 10px;
}

.wedding-experience-content-wrapper>.row:nth-child(even) .wedding-experience-content {
    order: -1;
}

@media only screen and (max-width: 997px) {
    .wedding-experience-content-wrapper>.row:nth-child(even) .wedding-experience-content {
        order: 2;
    }

    .wedding-experience-content {
        padding-inline: 10px;
    }
}
</style>
