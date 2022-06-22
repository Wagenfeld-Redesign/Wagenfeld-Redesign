const vertexShader = `
    
    precision highp float;

    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform vec2 pixels;
    float PI = 3.141592653589793238;
    uniform float distanceFromCenter;

    void main() {
        vUv = (uv - vec2(0.5)) * (1.-0.1 *distanceFromCenter*(2. - distanceFromCenter)) + vec2(0.5);

        vec3 pos = position;
        pos.y += sin(PI * uv.x) *0.03;
        // pos.x += sin(PI * uv.x) *0.02;
        
        pos.x += sin(time*0.3) * 0.01;
        vUv.x -= sin(time*0.3) * 0.01;

        // vUv.y -= 0.005;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
    }
`;

export default vertexShader;
