<style lang='stylus'>
.mainBody
    width 960px
    margin 0 auto
</style>

<template>
    <div class="mainBody">

        <main-head></main-head>
        <main-content></main-content>
        <main-foot></main-foot>

    </div>
</template>

<script>
import mainHead from "./head/mainHead";
import mainContent from "./content/mainContent";
import mainFoot from "./foot/mainFoot";

export default {
    name: "",
    components: { mainHead, mainContent, mainFoot },
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>