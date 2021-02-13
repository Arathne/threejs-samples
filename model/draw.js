let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0.9, 0.5, 0.4), 1.0);
document.body.appendChild(renderer.domElement);

let light = new THREE.PointLight(0xffffff, 1.5, 100);

let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 500);
camera.position.y = 5;

let scene = new THREE.Scene();
const loader = new THREE.GLTFLoader();

const addModelToScene = (gltf) => {
	scene.add(gltf.scene);
};

const loadingInProgress = (xhr) => {
	console.log((xhr.loaded / xhr.total * 100) + '% loaded');
};

const loadingError = (error) => {
	console.log("error:" + error);
};

loader.load('dice.glb', addModelToScene, loadingInProgress, loadingError);
scene.add(light);

let angle = 0;
let distance = 10;

var animate = function () {
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
