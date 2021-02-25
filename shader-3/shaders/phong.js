// phong lighting model -- cube has ambient and diffuse lighting

const PHONG_VS = `
	out vec3 FragPos;
	out vec3 Normal;

	void main() {
		Normal = normal;
		FragPos = vec3(modelMatrix * vec4(position, 1.0));
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	}
`;

const PHONG_FS = `
	in vec3 FragPos;
	in vec3 Normal;

	void main() {
		vec3 objectColor = vec3(1.0, 5.0, 2.0);
		vec3 lightColor = vec3(0.2, 0.2, 0.2);

		vec3 normal = normalize(Normal);
		vec3 lightDir = normalize(cameraPosition - FragPos);
		
		float diffuseStrength = max(dot(normal, lightDir), 0.0);
		vec3 diffuse = diffuseStrength * lightColor;
		
		float ambientStrength = 0.1;
		vec3 ambient = ambientStrength * lightColor;

		vec3 result = (ambient + diffuse) * objectColor;

		gl_FragColor = vec4(result, 1.0);
	}
`;

const PHONG_MATERIAL = new THREE.ShaderMaterial({
	vertexShader: PHONG_VS,
	fragmentShader: PHONG_FS
});

var CUBE_GEOMETRY = new THREE.BoxGeometry(1, 1, 1);
var PHONG_CUBE = new THREE.Mesh(CUBE_GEOMETRY, PHONG_MATERIAL);
