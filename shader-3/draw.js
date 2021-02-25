let renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0.7, 0.5, 0.4), 1.0);
document.body.appendChild(renderer.domElement);

let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 30);
camera.position.y = 1.5;

let light = new THREE.PointLight(0xffffff, 1, 100);

//PHONG_CUBE, PULSE_CUBE, CHECKER_CUBE

let scene = new THREE.Scene();
scene.add(light);
scene.add(CHECKER_CUBE);

let angle = 0;
let distance = 3;

let startTime = new Date().getTime();
let elapsed;

function updateUniforms() {
	PULSE_CUBE.material.uniforms.time.value = elapsed;
	CHECKER_CUBE.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
	CHECKER_CUBE.material.uniforms.time.value = elapsed;
}

function animate() {
	let currentTime = new Date().getTime();
	elapsed = (currentTime - startTime) / 500;
	updateUniforms();

	angle += 1;
	if (angle > 360)
		angle = 0;
	
	camera.position.x = Math.sin(angle * (Math.PI/180)) * distance;
        camera.position.z = Math.cos(angle * (Math.PI/180)) * distance;
        camera.lookAt(0,0,0);
	
	light.position.set(camera.position.x, camera.position.y, camera.position.z);
        light.lookAt(0, 0, 0);

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();
