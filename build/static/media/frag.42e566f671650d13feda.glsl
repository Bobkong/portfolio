uniform float time;
uniform vec2 resolution;

void main() {
   float z = 1.0 - (gl_FragCoord.z / gl_FragCoord.w) / 20.0;
   //gl_FragColor = vec4(sin(time * 2.0) * z, cos(time) * z, atan(time) * z, 1.0);

   //vec2 st = gl_FragCoord.xy/resolution;
   //float pct = distance(st,vec2(0.5));

   vec2 circCoord = 2.0 * gl_PointCoord - 1.0;
   if (dot(circCoord, circCoord) > 1.0) {
      discard;
   }

   float pct = min(1., distance(gl_PointCoord, vec2(0.5)));

   //gl_FragColor = vec4(vec3(.5 - pct), 1.0);
   
   //gl_FragColor = vec4(vec3(1.0), .5 - pct);
   gl_FragColor = vec4(vec3(.9), .9);
}