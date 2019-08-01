<style lang='stylus'>
</style>

<template>
    <span>
        <slot v-if="initSuccess"></slot>
    </span>
</template>

<script>
export default {
    name: "jx-lazy",
    props: {
        time: {
            required: false,
            default: 0
        }
    },
    components: {},
    data() {
        return {
            initSuccess: false
        };
    },
    created() {
        this.initSlot();
    },
    computed: {},
    methods: {
        initSlot() {
            setTimeout(() => {
                this.initSuccess = true;
            }, Number(this.time || 0));
        }
    }
};
</script>