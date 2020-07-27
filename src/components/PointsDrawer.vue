<template>
	<canvas id="point-canvas"></canvas>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import store from "@/store";
import { Point } from "../types";
@Component({
	name: "PointDrawer",
	components: {
		PointDrawer
	},
	computed: {
		...mapGetters("InteractionState", {
			point: "point"
		})
	}
})
export default class PointDrawer extends Vue {
	regl!: any;
	point!: Point;
	beforeDestroy() {
		this.regl.destroy();
	}

	loadImage(url: string) {
		return new Promise((resolve, reject) => {
			const image = document.createElement("img");
			image.onload = function() {
				resolve(image);
			};
			image.src = url;
		});
	}

	async mounted() {
		const canvas = document.getElementById(
			"point-canvas"
		) as HTMLCanvasElement;
        if (!canvas) return;
        const width = window.innerWidth;
		const height = window.innerHeight;
        canvas.width = width;
		canvas.height = height;
        this.regl = require("regl")(canvas);

		const fbo = this.regl.framebuffer({
			color: this.regl.texture({
				width,
				height,
				wrap: "clamp"
			}),
			depth: true
		});

		const pixels = this.regl.texture();
		const img = await this.loadImage(require("../assets/demo1.jpg"));
        const imageTexture = this.regl.texture(img);
        
        const frag = require("raw-loader!glslify-loader!../shaders/points-frag.glsl");
        const background = require("raw-loader!glslify-loader!../shaders/background.glsl");
		const vert = require("raw-loader!glslify-loader!../shaders/points-vert.glsl");

		const drawFboBlurred = this.regl({
			frag: background.default,
            vert: vert.default,
            
			attributes: {
				position: [-4, -4, 4, -4, 0, 4]
			},
			uniforms: {
				tex: ({ count }: { count: number }) => fbo,
				image: imageTexture,
				res: [width, height, 1, 1]
			},
			depth: { enable: false },
			count: 3
		});

		
		const drawPoints = this.regl({
			frag: frag.default,
			vert: vert.default,

			attributes: {
				// each of these gets mapped to a single entry for each of
				// the points. this means the vertex shader will receive
				// just the relevant value for a given point.
				position: [-2, 0, 0, -2, 2, 2]
			},

			uniforms: {
				/* texture: ({ count } : {count: number}) => fbo, */
				texture: pixels,
				velocity: () => [this.point.dx, this.point.dy],
				mouse: () => [this.point.x, this.point.y],
				t: ({ tick }: { tick: number }) => 0.01 * tick,
				iResolution: [width, height],

				/* image: imageTexture, */
				/* position: () => [this.point.x, this.point.y],
                color: () => [this.point.dx, this.point.dy, Math.abs(this.point.dx) + Math.abs(this.point.dy)] */
				// by using `regl.prop` to pass these in, we can specify
				// them as arguments to our drawPoints function
				/* pointWidth: this.regl.prop("pointWidth"), */

				// regl actually provides these as viewportWidth and
				// viewportHeight but I am using these outside and I want
				// to ensure they are the same numbers, so I am explicitly
				// passing them in.
				/* stageWidth: this.regl.prop("stageWidth"),
				stageHeight: this.regl.prop("stageHeight") */
			},

			// specify the number of points to draw
			depth: { enable: false },
			count: 3
			// specify that each vertex is a point (not part of a mesh)
			/* primitive: "points" */
		});

		const setupDefault = this.regl({
			cull: {
				enable: true
			},
			framebuffer: fbo
		});

		// start the regl draw loop
		this.regl.frame(() => {
			setupDefault({}, () => {
				this.regl.clear({
					color: [1, 1, 1, 1],
					depth: 1
				});

				/* this.uVelocity = this.velocity; */

				drawPoints();
				pixels({
					copy: true
				});
			});

			this.regl.clear({
				color: [1,1,1, 1]
			});

			drawFboBlurred();
		});
	}
}
</script>

<style lang='scss' scoped>
canvas {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	/* width: 100vw;
    height: 100vh; */
}
</style>