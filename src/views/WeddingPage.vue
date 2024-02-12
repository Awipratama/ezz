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
    <Navigation />
    <setion></setion>
    <MainFooter />
</template>