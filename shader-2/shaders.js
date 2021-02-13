var VERTEX_SHADER = `
	void main() {
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
	}
`;

var FRAGMENT_SHADER = `
	void main() {
		gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	}
`;
