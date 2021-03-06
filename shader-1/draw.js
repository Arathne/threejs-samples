let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
	
let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 5;

let scene = new THREE.Scene();

material = new THREE.ShaderMaterial({
	vertexShader: document.getElementById('vertexShader').textContent, 
	fragmentShader: document.getElementById('fragmentShader').textContent
});

const geometry = new THREE.BoxGeometry(1, 1, 1);

const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x += 45;
mesh.rotation.y += 45;

scene.add( mesh );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();
