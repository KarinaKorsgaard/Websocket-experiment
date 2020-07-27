<template>
	<div class="container">
		<h2>{{project.title}}</h2>
		<p class="big" v-if="project.subtitle != ''">{{project.subtitle}}</p>
        <content-block-render :id="project.id" :containerStyle="{width: '80vw'}" v-if="project.hero" :content="project.hero"></content-block-render>

		<div class="content">
			<div class="content-block" :class="c.tag" v-for="(c, i) in project.content" v-bind:key="`c${i}`">
				<content-block-render :id="project.id" :content="c"></content-block-render>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ContentBlockRender from './ContentBlockRender.vue'
@Component({
	name: "Project",
	components: {
		ContentBlockRender
	}
})
export default class Project extends Vue {
	@Prop() project!: Project;
}
</script>

<style lang='scss' scoped>
.container {
    margin-bottom: 3rem;
    h2 {
        font-size: 2rem;
    }
	.big {
        font-size: 1.5rem;
        margin-bottom: 3rem;
	}
    width: 80vw;
    margin: 200px auto;
}
.content {
    .content-block {
         width: 25vw;
         &.full-width {
             width: 80vw;
         }
    }
	display: flex;
	flex-wrap: wrap;
    justify-content: space-between;
	
	/* grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem; */

	font-size: 1rem;

	
	/* > div:first-child {
		width: auto;
        height: 400px;
        margin: 0 auto;
		img,
		video {
			width: auto;
            height: 400px;
		}
	} */
}
</style>