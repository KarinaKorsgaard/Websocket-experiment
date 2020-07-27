<template>
<!-- <div class="container" :style="{
        backgroundImage: 'url(' + getHeroFileName + ')',
        width: `${layer*50}px`,
        height: `${layer*100}px`,
        opacity: `${layer / 5}`,
        filter: `blur(${1-(layer / 5)}px)`,
    }"> -->
     <div class="container">
    <gl-image :src='getHeroFileName'/>
     
</div>
</template>

<script lang='ts'>

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ProjectType } from '../types';
import { mapGetters } from "vuex";
import GlImage from "./Image.vue";

@Component({
     name: 'Thumbnail',
     components: {
         Thumbnail,
         GlImage
     },
     computed: {
        ...mapGetters("InteractionState", {
            scrollSpeed: "scrollSpeed",
            scrollPosition: "scrollPosition",
        })
    },
})
export default class Thumbnail extends Vue{
    @Prop() project!: ProjectType;
    @Prop() skew!:number;
    posY = Math.random() * window.innerHeight * 2
    posX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1
    layer = Math.floor(Math.random() * 5)

    @Watch("scrollSpeed")
	onScrollSpeedChange(next: number) {
        this.posY += next * (5 - this.layer) * 0.1
        
        if (this.posY > window.innerHeight * 2) this.posY = 0
        if (this.posY < 0) this.posY = window.innerHeight * 2
	}

    get getHeroFileName () {
        return require("../assets/" + this.project.id + "/" + this.project.hero);
    } 

}
</script>

<style lang='scss' scoped>
.container {
    p {opacity: 0;}
}
.container:hover {
    p {opacity: 1;}
}
</style>