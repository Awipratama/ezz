<script>
import MainNavigation from '@/components/MainNavigation.vue';
export default {
    components: {
        Navigation: MainNavigation
    }
};
</script>
<template>
    <Navigation active="contact" :pad="true" />
    <section class="hero text-white">
        <h1 class="hero-title">Contact US</h1>
        <div class="container row w-100 mt-5 hero-content">
            <div>
                <div class="info-wrapper">
                    <div>
                        <i class="bi bi-geo-alt-fill icon"></i>
                    </div>
                    <h4 class="info-title">Location</h4>
                    <div>Jln. Hayam Wuruk
                        No. 199 Denpasar Bali
                    </div>
                </div>
            </div>
            <div>
                <div class="info-wrapper">
                    <div>
                        <i class="bi bi-telephone-fill icon"></i>
                    </div>
                    <h4 class="info-title">Reservation</h4>
                    <div> (0361) 474 8590
                    </div>
                </div>
            </div>
            <div>
                <div class="info-wrapper">
                    <div>
                        <i class="bi bi-geo-alt-fill icon"></i>
                    </div>
                    <h4 class="info-title">Location</h4>
                    <div>
                        <!-- Jln. Hayam Wuruk No. 199 Denpasar Bali -->
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="py-5 contact">
        <div class="container">
            <form class="form">
                <h3 class="mb-5 text-center text-capitalize">Send us message</h3>
                <div class="row gx-6">
                    <div class="col-6 form-group">
                        <label class="form-label">First Name</label>
                        <input class="w-100 form-control" placeholder="First name" />
                    </div>
                    <div class="col-6 form-group">
                        <label class="form-label">Last Name</label>
                        <input class="w-100 form-control" placeholder="Last Name" />
                    </div>
                </div>
                <div class="row gx-6 mt-5">
                    <div class="col-6 form-group">
                        <label class="form-label">Email</label>
                        <input class="w-100 form-control" placeholder="First name" />
                    </div>
                    <div class="col-6 form-group">
                        <label class="form-label">Phone</label>
                        <input class="w-100 form-control" placeholder="Last Name" />
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label class="form-label">Message</label>
                    <textarea class="form-control w-100" placeholder="Message" rows="8"></textarea>
                </div>
                <div class="mt-4 text-right">
                    <button class="btn btn-secondary px-5 py-2">Submit</button>
                </div>
            </form>
        </div>
    </section>
    <section></section>
</template>

<style scoped>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url('@/assets/img/contact/contact.jpg');
    padding-block: 100px;
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: center;
}

.hero-title {
    text-transform: uppercase;
    font-weight: 700;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.hero-content>div {
    justify-self: center;
}


.form {
    margin-inline: auto;
    max-width: 650px;
    padding-inline: 10px;
}

.form-control {
    font-size: 0.9rem;
    padding: 12px 20px;
}

.form-label {
    margin: 0;
    margin-bottom: 5px;
    font-size: 0.88rem;
}

.gx-6 {
    --bs-gutter-x: 2rem;
}

.contact {
    background-color: #efefef;
}

.icon {
    font-size: 1.7rem;
}

.info-wrapper {
    justify-content: center;
    padding-inline: 60px;
    display: grid;
    grid-template-rows: max-content max-content;
    column-gap: 15px;
    grid-template-columns: max-content fit-content(100%);
}

.info-wrapper>div {
    max-width: 100%;
    align-self: end;
}

.info-wrapper :nth-child(3) {
    grid-column: 2;
}

.info-title {
    margin: 0;
    text-transform: capitalize;
    font-weight: 500;
    padding: 0;
    padding-top: 5px;
}
</style>
