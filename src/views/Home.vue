<template>
	<main id="home" ref="home">
		<div>
			<h1 :style="{color: showShader ? 'white': 'black'}">Karina Korsgaard</h1>
            <input v-model="showShader" :value="showShader" type='checkbox'/>
		</div>
        <websockets></websockets>
        <points-drawer  v-if="showShader"></points-drawer>
		<section class="projectContainer" id="projectContainer"  v-if="!showShader">
			<template v-for="(item, i) in projects">
				<project-component :key="i" :project="item"></project-component>
			</template>
		</section>
	</main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Thumbnail from "@/components/Thumbnail2.vue";
import PointsDrawer from "@/components/PointsDrawer.vue";
import Websockets from "@/components/Websockets.vue";

import { mapGetters } from "vuex";
import store from "@/store";
import projectsData from '../data/data'
import { Project } from '../data/types';
import ProjectComponent from '../components/Project.vue'
const gsap = require('gsap')

@Component({
	name: "Home",
	components: {
        Home,
        Thumbnail,
        Websockets,
        PointsDrawer,
        ProjectComponent
    },
    computed: {
        ...mapGetters("InteractionState", {
            scrollSpeed: "scrollSpeed",
            scrollPosition: "scrollPosition",
        })
    },
})
export default class Home extends Vue {
    projectInfo = require("../assets/filenames.json")
	projects: Project[] = projectsData;
    showShader = true;
	mounted() {
        window.addEventListener('scroll', this.handleScroll);

        /* for (let p in this.projectInfo) {
            if ((this.projectInfo[p] as ProjectType).tags != "dontShow")
                this.projects.push({...this.projectInfo[p], ...{id: p}} as ProjectType)
        } */
    }

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        this.projects = [];
    }
    
    handleScroll() {
        store.commit.InteractionState.UPDATE_SCROLL(window.scrollY)
    }
}
</script>

<style lang="scss">
.projectContainer {
    /* margin-top: 60px;
    
    height: 300vh; */
}

</style>
