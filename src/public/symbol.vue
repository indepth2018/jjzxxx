<style lang='stylus'>
</style>

<template>
    <svg>
        <use :xlink:href="iconsUrl+'#'+name"></use>
    </svg>
</template>

<script>
export default {
    name: "jx-symbol",
    components: {},
    data() {
        return {
            iconsUrl: require("@/assets/Icons.svg")
        };
    },
    props: ["name"]
};
</script>