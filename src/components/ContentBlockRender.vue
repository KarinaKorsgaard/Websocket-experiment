<template>
	<div :style="containerStyle" class="block">
		<div class="image" v-if="content.type=='image'" :style="{backgroundImage: 'url('+src()+')'}">
			<!-- <img :src="require(`../assets/${id}/${content.src}`)" /> -->
		</div>
		<div v-else-if="content.type=='video'" v-bind:key="`c${id}`">
			<video muted loop autoplay :src="require(`../assets/${id}/${content.src}`)" />
		</div>
		<p :class="content.type != 'text' ? 'image-text': ''" v-html="content.content"></p>
	</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { contentBlock } from "../data/types";

@Component({
	name: "ContentBlockRender",
	components: {}
})
export default class ContentBlockRender extends Vue {
	@Prop() id!: string;
	@Prop() content!: contentBlock;
    @Prop() containerStyle!: any;
    
    src () {
        console.log(`../assets/${this.id}/${this.content.src}`)
        return require(`../assets/${this.id}/${this.content.src}`)
    }
}
</script>

<style lang='scss' scoped>
.block {
	// width: 100%;
	width: inherit;
    div {
        width: inherit;
        img,video,p {
            width: inherit;
            max-height: 500px;
            /* width: auto; */
        }
    }

	margin-bottom: 3rem;
    .image {
        background-size: cover;
        height: 300px;
        width: inherit;
        background-position: center center;
    }
    .image-text {
        font-size: 0.8rem;
        font-weight: bold;
        margin-top: 1rem;
    }
}
</style>