<template>
    <div :style="{width: `${imageSizeX}px`, height: `${imageSizeY}px`}">
        <canvas :id="id"></canvas></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

const regl = require("regl");
const baseWidth = 200
@Component({
	name: "GlImage",
	components: {
		GlImage
	}
})
export default class GlImage extends Vue {
	@Prop() src!: string;
	regl!: any;
    imageSizeX = 0;
    imageSizeY = 0;
    texture!: any
    mouse = [-10., -10.5]
    prog: number = 0
	get id() {
		return `uid_${this.uid}`;
	}
	async mounted() {
        const img = await this.loadImage(this.src);
        this.imageSizeX = baseWidth;
        this.imageSizeY = baseWidth * (img.height / img.width);

        console.log(this.imageSizeX)
        

		const canvas = document.getElementById(this.id) as HTMLCanvasElement;
		canvas.width = this.imageSizeX;
		canvas.height =  this.imageSizeY;
        this.regl = require("regl")(canvas);
        this.texture = this.regl.texture(img);

        const frag = require("raw-loader!glslify-loader!../shaders/wave-frag.glsl");
        const vert = require("raw-loader!glslify-loader!../shaders/wave-vert.glsl");
    
        const shader = this.regl({
        frag: frag.default,
        vert: vert.default,

        attributes: {
            position: [-2, 0, 0, -2, 2, 2]
        },

        uniforms: {
            uTexture: this.texture,
            uTime: ({ tick } : {tick: number}) => 0.01 * tick,
            uProg: () => this.prog,
            uMouse: () => this.mouse,
            iResolution: [this.imageSizeX, this.imageSizeY]
        },

        count: 3
        });

        this.regl.frame(({ deltaTime, viewportWidth, viewportHeight } : {
            deltaTime: number,
            viewportWidth: number,
            viewportHeight: number,
        }) => {
            this.regl.clear({
                color: [0, 0, 0, 1]
            });
            shader();
        });

        canvas.addEventListener("mousemove", this.onmousemove);
        canvas.addEventListener('mouseleave', this.onmouseout);
	}

	beforeDestroy() {
        console.log("destroy");
        /* window.removeEventListener("mousemove", this.updateMouse); */
		this.regl.destroy();
	}

	loadImage(url: string):Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const image = document.createElement("img");
			image.onload = function() {
				resolve(image);
			};
			image.src = url;
		});
    }
    
    onmousemove(e: MouseEvent) {
        const x = e.offsetX / this.imageSizeX
        const y = 1.0 - e.offsetY / this.imageSizeY
        // Get mouse value in 0 to 1 range, with y flipped
        this.mouse = [x, y]
        this.prog = 1. - (x-0.5) * (y-0.5);
    }
    onmouseout(e: MouseEvent) {
        this.mouse = [-10, -10]
    }
}
</script>

<style lang='scss' scoped>
div {
    margin: 200px;  
    canvas {

    }
}

</style>