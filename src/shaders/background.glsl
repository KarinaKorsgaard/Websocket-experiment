precision mediump float;
			varying vec2 uv;
			uniform sampler2D tex;
			uniform sampler2D image;
            uniform vec4 res;
            mat4 saturationMatrix( float saturation )
{
    vec3 luminance = vec3( 0.3086, 0.6094, 0.0820 );
    
    float oneMinusSat = 1.0 - saturation;
    
    vec3 red = vec3( luminance.x * oneMinusSat );
    red+= vec3( saturation, 0, 0 );
    
    vec3 green = vec3( luminance.y * oneMinusSat );
    green += vec3( 0, saturation, 0 );
    
    vec3 blue = vec3( luminance.z * oneMinusSat );
    blue += vec3( 0, 0, saturation );
    
    return mat4( red,     0,
                green,   0,
                blue,    0,
                0, 0, 0, 1 );
}


float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec3 flow = texture2D(tex,  uv).rgb;
    /* vec2 uv = .5 * gl_FragCoord.xy / res.xy ; */
float ran = random(uv);
    /* vec2 myUV = gl_FragCoord.xy / res.xy;
    myUV.x -= (flow.x - 0.5) * flow.z * (0.35 * 0.7);
    myUV.y -= (flow.y - 0.5) * flow.z *(0.35 * 0.7);
    myUV.y = 1.0 - myUV.y;

    vec3 finalTex = texture2D(image, myUV).rgb; */
    /* flow.b = 1.0 - flow.b; */
    flow *= 5.0;
    /* flow.g = 0.0;
    flow.r = 0.0; */
    gl_FragColor = saturationMatrix( ran ) * vec4(flow, 1.0);


    // gl_FragColor = texture2D(image, uv);
}