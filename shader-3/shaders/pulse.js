// color changes between green and black

const PULSE_VS = `
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`;

const PULSE_FS = `
	uniform float time;

	void main() {
		gl_FragColor = vec4(0.0, sin(time), 0.0, 1.0);
	}
`;

const PULSE_MATERIAL = new THREE.ShaderMaterial({
	uniforms: {
		time: { value: 0.5 }
	},
	vertexShader: PULSE_VS,
	fragmentShader: PULSE_FS
});

var PULSE_CUBE = new THREE.Mesh(CUBE_GEOMETRY, PULSE_MATERIAL);
