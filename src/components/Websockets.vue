<template>
	<div>
	</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import store from "@/store";
import { Point } from '../types';

@Component({
	name: "Websockets",
	components: {
		Websockets
	}
})
export default class Websockets extends Vue {
    res = "";
    connection!: WebSocket
    prevPoint: {x: number, y:number} = {x: 0, y: 0}
    /* points: {x: number, y:number}[] = [] */
    isOpen = false
	mounted() {
		// if user is running mozilla then use it's built-in WebSocket
		// window.WebSocket = window.WebSocket;

		this.connection = new WebSocket("wss://7trr4x5ymj.execute-api.eu-west-1.amazonaws.com/prod");
        const self = this
		this.connection.onopen = function() {
            // connection is opened and ready to us
            self.isOpen = true
            console.log('open connection')
		};

		this.connection.onerror = function(error) {
			// an error occurred when sending/receiving data
		};

        this.connection.onmessage = message => this.onmessage(message);

        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('touchmove', this.touchMove)
        this.slowlyRemove()
    }
    timeout!:NodeJS.Timeout
    slowlyRemove () {
        /* this.timeout = setTimeout(() => {
            if (this.points.length > 1) this.points.splice(0, 1)
            this.slowlyRemove()
        }, 500/(this.points.length+1)) */
        
    }
 
    beforeDestroy() {
        if (this.timeout) clearTimeout(this.timeout)
        window.removeEventListener('mousemove', this.handleMouseMove)
        window.removeEventListener('touchmove', this.touchMove)
        this.connection.close()
    }
    touchMove(e: TouchEvent) {
        if (e.touches.length > 0)
            this.move(e.touches[0].clientX, e.touches[0].clientY)
    }
    handleMouseMove(e: MouseEvent) {
        this.move(e.clientX, e.clientY)
    }
    move (x: number, y: number) {
        if (!this.isOpen) return
        const newpoint = {
            x: x / window.innerWidth,
            y: y / window.innerHeight,
        }
        const dPoint = {
            x: newpoint.x,
            y: 1 - newpoint.y,
            dx: (newpoint.x - this.prevPoint.x) * 10.,
            dy: (newpoint.y - this.prevPoint.y) * 10.,
        }
        /* console.log(dPoint.dx, dPoint.dy) */
        this.prevPoint = newpoint;
        
        /* console.log('send message') */
        this.connection.send(JSON.stringify({"message":"sendmessage", "data":JSON.stringify(dPoint)}))
        //this.connection.send(JSON.stringify(m));
    }

    
	onmessage(message: any) {
        /* console.log(message) */
		try {
            /* console.log(message.data) */
            const newpoint = JSON.parse(message.data);            
            store.commit.InteractionState.SET_CURSORS(newpoint as Point);

		} catch (e) {
			console.log("This doesn't look like a valid JSON: ", message.data);
			return;
		}
		// handle incoming message
    }
    
   
}
</script>

<style lang='scss' scoped>
.point {
	position: absolute;
	background: $black;
	width: 35px;
	height: 35px;
	transform: translate(-15px, -15px);
	border-radius: 20px;
    padding: 15px;
    border:1px solid $white;
	/* mix-blend-mode: difference; */

	div {
		width: 5px;
		height: 5px;
		background: $white;
		border-radius: 5px;
	}
}
</style>