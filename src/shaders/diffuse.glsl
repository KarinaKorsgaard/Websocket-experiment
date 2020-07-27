precision mediump float;

uniform sampler2D texture;

uniform vec2 iResolution;
uniform float time;
uniform vec2 mouse;


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

mat4 brightnessMatrix( float brightness ){
    return mat4( 1, 0, 0, 0,
                 0, 1, 0, 0,
                 0, 0, 1, 0,
                 brightness, brightness, brightness, 1 );
}

mat4 contrastMatrix( float contrast )
{
	float t = ( 1.0 - contrast ) / 2.0;
    
    return mat4( contrast, 0, 0, 0,
                 0, contrast, 0, 0,
                 0, 0, contrast, 0,
                 t, t, t, 1 );

}

vec2 hash( vec2 p ) { p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))); return fract(sin(p)*18.5453); }

// return distance, and cell id
vec2 voronoi( in vec2 x )
{
    vec2 n = floor( x );
    vec2 f = fract( x );

	vec3 m = vec3( 8.0 );
    for( int j=-1; j<=1; j++ )
    for( int i=-1; i<=1; i++ )
    {
        vec2  g = vec2( float(i), float(j) );
        vec2  o = hash( n + g );
      //vec2  r = g - f + o;
	    vec2  r = g - f + (0.5+0.5*sin(time+6.2831*o));
		float d = dot( r, r );
        if( d<m.x )
            m = vec3( d, o );
    }

    return vec2( sqrt(m.x), m.y+m.z );
}
float circle(vec2 p, vec2 uv, float r) {
    float l = length(uv - p);
    return step(l, r);
}
float ray(vec2 light, vec2 uv) {
    float dist_to_light = length(light - uv);
    vec2 dir = (light - uv);

    float thres = 0.5;
    const int steps = 1000;
    const float stepSize = 1.0 / float(steps);
    vec2 pos = light;
    float c = 0.0;
    int bounce = 0;
    for (int i = 0; i< steps; i++) {
        
        pos -= dir * stepSize;
        vec3 t = texture2D(texture, pos).rgb;

       /*  if (pos.x > 1.0) {dir*=-1.0;}
        if (pos.y > 1.0) {dir*=-1.0;}
        if (pos.x < 0.0) {dir*=-1.0;}
        if (pos.y < 0.0) {dir*=-1.0;} */

        if (t.r > thres) { 
            
            break;
        }
        
        // if (bounce > 0) {break;}
        // if (c > 0.5) {c = 0.0;}
        
        
        c += stepSize;
    }
    return c;
}
void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    uv.y = 1. - uv.y;
    //uv += (voronoi(uv*3.) * mouse) - mouse/2.;
    vec4 texture = texture2D(texture, uv);
    
    // uv.x += voronoi(uv*10.).x;
   /*  vec3 r = ray(l1, uv) * vec3(0.0, 0.8, 0.6);
    vec3 g = ray(l2, uv) * vec3(0.2, 0.0, 0.6);
    vec3 b = ray(l3, uv) * vec3(0.4, 0.1, 1.0);
 */
/*  vec3 blue = vec3(0.3, 0.4, 1.0);
 vec3 red = vec3(0.8);
float dist_to_light = length(mouse - uv);
    vec3 m = ray(mouse, uv) * mix(red, blue, dist_to_light);


    vec3 c = m;// + r + g + b;
    // lights: 
    
    vec4 col = vec4(c, 1.0); */
    gl_FragColor = texture;//mix(prev_light, col, 0.1);
    return;
   // vec4 col = vec4(t * vec3(dist * c) + t * dist, 1.0);
   //  gl_FragColor = contrastMatrix( 1.5 ) * brightnessMatrix ( 0.2 ) * saturationMatrix( 0.02 ) * col;


    // gl_FragColor = contrastMatrix( 2.3 ) * brightnessMatrix ( 0.2 ) * saturationMatrix( 0.02 ) * vec4(col, 1.0);


    // gl_FragColor = texture2D(image, uv);
}