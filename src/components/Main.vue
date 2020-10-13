<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style  scoped>
    main{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        padding: 16px;
    }
    @media only screen and (min-width: 920px) {
        main{
        position: relative;
        top: 0;
        left: 20%;
        width: 80%;
        padding: 50px;
    }
    }
</style>