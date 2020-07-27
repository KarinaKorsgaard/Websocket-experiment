precision mediump float;

uniform vec2 iResolution;
uniform sampler2D uTexture;
uniform float uTime;
uniform float uProg;
  uniform vec2 uMouse;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec2 uv = (gl_FragCoord.xy / iResolution.xy);
    uv.y = 1. - uv.y;
    
    float distToMouse = clamp(1.-distance(uMouse,uv), 0., 1.) * 0.1;
    /* uv += (random(uv * uTime)-0.5) * (clamp(distToMouse, 0., 1.)*0.1); */
    float ran = random(uv * uTime) - 0.5;
    float r = texture2D(uTexture, uv + ran * distToMouse * 1.).r;
    float b = texture2D(uTexture, uv + ran * distToMouse * -1.01).b;
    float g = texture2D(uTexture, uv + ran * distToMouse * 2.03).g;
    gl_FragColor = vec4(r,g,b,1.);
}