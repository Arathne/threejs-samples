let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
	
let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 5;

let scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.ShaderMaterial({
	vertexShader: VERTEX_SHADER,
	fragmentShader: FRAGMENT_SHADER
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x += 45;
mesh.rotation.y += 45;

scene.add( mesh );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();
