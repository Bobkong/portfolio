uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture1;
uniform sampler2D u_texture2;
uniform float u_progress;

varying vec2 v_uv;

#define TAU 6.2831853071

// https://www.shadertoy.com/view/MdBfzR
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
	vec2 uv = v_uv + vec2(0., -0.7 + u_progress);
  //vec2 uv = fragCoord.xy / u_resolution.xy;
    
  float o = texture2D(u_texture1, uv * 0.25 + vec2(0.0, u_time * 0.025)).r;
  float d = (texture2D(u_texture2, uv * 0.25 - vec2(0.0, u_time * 0.02 + o * 0.02)).r * 2.0 - 1.0);
  
  //float v = uv.y + d * 0.2;
  float v = uv.y + d * 0.14;
  v = 1.0 - abs(v * 2.0 - 1.0);
  v = pow(v, 2.0 + sin((u_time * 0.2 + d * 0.25) * TAU) * 0.5);
  
  vec3 color = vec3(0.0);
  
  float x = (1.0 - uv.x * 0.75);
  float y = 1.0 - abs(uv.y * 2.0 - 1.0);
  //color += vec3(x * 0.5, y, x) * v;
  color += vec3(x * max(0.7, u_progress * 1.6), y, x) * v;
  
  vec2 seed = fragCoord.xy;
  vec2 r;
  r.x = fract(sin((seed.x * 12.9898) + (seed.y * 78.2330)) * 43758.5453);
  r.y = fract(sin((seed.x * 53.7842) + (seed.y * 47.5134)) * 43758.5453);

  //float s = mix(r.x, (sin((u_time * 2.5 + 60.0) * r.y) * 0.5 + 0.5) * ((r.y * r.y) * (r.y * r.y)), 0.04); 
  float s = mix(r.x, (sin((u_time * 2.5 + 60.0) * r.y) * 1.5 + 0.5) * ((r.y * r.y) * (r.y * r.y)), 0.04); 
  color += pow(s, 70.0) * (1.0 - v);
  
  fragColor.rgb = color;
  fragColor.a = 1.0;
  fragColor.a = fragColor.r + fragColor.g + fragColor.b;
  fragColor.a = v_uv.y * min(1.0, -.5 + u_time*0.5);
}

void main() {
    vec4 color = vec4(0.);
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
