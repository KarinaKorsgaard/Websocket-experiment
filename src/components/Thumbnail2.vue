<template>
<!-- <div class="container" :style="{
        backgroundImage: 'url(' + getHeroFileName + ')',
        width: `${layer*50}px`,
        height: `${layer*100}px`,
        opacity: `${layer / 5}`,
        filter: `blur(${1-(layer / 5)}px)`,
    }"> -->
     <div class="container">
         <div class="dot" :style="{backgroundImage: `url(${getHeroFileName})`}">
        </div>
        <span>{{project.title}}</span>
     </div>
</template>

<script lang='ts'>

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ProjectType } from '../types';
import { mapGetters } from "vuex";

@Component({
     name: 'Thumbnail',
     components: {
         Thumbnail,
     },
})
export default class Thumbnail extends Vue{
    @Prop() project!: ProjectType;
    get getHeroFileName () {
        return require("../assets/" + this.project.id + "/" + this.project.hero);
    } 

}
</script>

<style lang='scss' scoped>
.container {
    display: inline-block;
    margin-right: 100px;
    margin-bottom: 100px;
    /* width: calc(100% + 75px); */
   /*  width: auto; */
    /* position: relative; */
    /* border: 1px solid red; */

    height: 150px;
    span {
        font-family: $headlinefont;
        font-size: rem(55px);
        /* border: 1px solid red; */
        opacity: 1;
        top: 75px;
        left: 75px;
        color: white;
       /*  min-width: 200px; */
        position: relative;
        /* max-lines: 0; */
        line-height: 55px;
    }
}

.dot {
    position: absolute;
    width: 150px;
    height: 150px;
    filter: saturate(0);
    opacity: 0.5;
    background-blend-mode: difference;
    border-radius: 9990px;
    background-size: cover;
    background-position: center center;
}
.container:hover {
    > * {opacity: 1;}
}
</style>