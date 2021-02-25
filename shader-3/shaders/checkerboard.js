// checker pattern inside cube

const CHECKER_VS = `
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`;

const CHECKER_FS = `
	uniform vec2 resolution;
	uniform float time;

	void main() {
		float multiplier = 10.0 + sin(time * 0.2);

		vec2 uv = fract((gl_FragCoord.xy / resolution.xy) * multiplier);
		uv -= 0.5;
		vec3 result = vec3(step(uv.x * uv.y, 0.0));

		gl_FragColor = vec4(result, 1.0);
	}
`;

const CHECKER_MATERIAL = new THREE.ShaderMaterial({
	uniforms: { 
		resolution: { value: new THREE.Vector2() },
		time: { value: 0.0 }
	},
	vertexShader: CHECKER_VS,
	fragmentShader: CHECKER_FS
});

var CHECKER_CUBE = new THREE.Mesh(CUBE_GEOMETRY, CHECKER_MATERIAL);
