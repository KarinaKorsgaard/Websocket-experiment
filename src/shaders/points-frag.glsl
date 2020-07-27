/* precision highp float;
					precision highp int;
					uniform sampler2D tWater;
					uniform sampler2D tFlow;
					uniform float uTime;
					varying vec2 vUv;
					uniform vec4 res;
					void main() {
							// R and G values are velocity in the x and y direction
							// B value is the velocity length
							vec3 flow = texture2D(tFlow, vUv).rgb;
							vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
							vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV -= flow.xy * (0.15 * 0.7);
							vec3 tex = texture2D(tWater, myUV).rgb;
							gl_FragColor = vec4(tex.r, tex.g, tex.b, 1.0);
					} */

precision mediump float;
uniform sampler2D texture;
uniform vec2 mouse;
uniform vec2 velocity;
uniform float t;
uniform vec2 iResolution;
varying vec2 uv;


void main () {
    vec4 color = texture2D(texture, uv) * 0.98;
     
    vec2 cursor = uv - mouse;
    cursor.x *= iResolution.x / iResolution.y;
    float uFalloff = 0.3;
    float uAlpha = .5;

    vec2 vel = velocity;

    vec3 stamp = vec3(velocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(velocity)), 3.0));
    float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * 0.3;
    color.rgb = mix(color.rgb, stamp, vec3(falloff));
    gl_FragColor = color;

}