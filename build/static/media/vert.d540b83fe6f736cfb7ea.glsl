uniform float time;
uniform float whirl;
attribute vec3 velocity;
attribute vec3 acceleration;

void main() {
    vec3 pos = position;
    /*
    gl_Position = projectionMatrix 
        * modelViewMatrix
        * vec4(
            vec3(
                sin(time * 4.0) + pos[0] + cos(time / velocity[0]) * 1.0 * velocity[0],
                cos(time + time * 4.0) + pos[1] * 2.0 * sin(time / velocity[1]) * velocity[1],
                sin(time + time + time * 4.0) + pos[2] * 2.0 * cos(time / velocity[2]) * 1.0 * velocity[2]), 1.0);
    */

    float phase = mod((time + acceleration[0]) * velocity[1], 1.);
    float travel = 2.;
    pos.x += sin((whirl + acceleration[0]) * velocity[0]);
    pos.y += phase * travel;
    pos.z += cos((whirl + acceleration[0]) * velocity[2]);

    vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    gl_PointSize = sin(phase * 3.14) * 7.;
}