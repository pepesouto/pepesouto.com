import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 0.025, 0.025, 0.025 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const cube2 = new THREE.Mesh( geometry, material2 );
// scene.add( cube2 );

const material4 = new THREE.MeshBasicMaterial( { color: 0x0000000 } );
const cube4 = new THREE.Mesh( geometry, material4 );
// scene.add( cube4 );

const geometry3 = new THREE.BoxGeometry( 1, 2, 1 );
const material3 = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const cube3 = new THREE.Mesh( geometry3, material3 );
// scene.add( cube3 );

camera.position.z = 5;

let loadedModel;
const glftLoader = new GLTFLoader();
glftLoader.load( './assets/vela/3DModel.gltf', function ( gltfScene ) {
// glftLoader.load( './assets/dos_yo_22_04_20.gltf', function ( gltfScene ) {
	loadedModel = gltfScene;


	gltfScene.scene.rotation.y = Math.PI / 8;
	// gltfScene.scene.position.y = 3;
	// gltfScene.scene.scale.set(10, 10, 10);
	gltfScene.scene.scale.set(8, 8, 8);

	scene.add(gltfScene.scene);

	gltfScene.scene.scale.set(9, 9, 9);
	scene.add(gltfScene.scene);

} );

let loadedModelVelaMedio;

glftLoader.load( './assets/vela/3DModel.gltf', function ( gltfScene2 ) {
	loadedModelVelaMedio = gltfScene2;


	gltfScene2.scene.rotation.z = Math.PI / 1.7;
	gltfScene2.scene.scale.set(0.5, 0.5, 0.5);

	scene.add(gltfScene2.scene);


} );


let loadedModelVelaChica;

glftLoader.load( './assets/vela/3DModel.gltf', function ( gltfScene2 ) {
	loadedModelVelaChica = gltfScene2;


	gltfScene2.scene.rotation.z = Math.PI / 1.95;
	gltfScene2.scene.scale.set(0.003, 0.003, 0.003);

	// scene.add(gltfScene2.scene);


} );

// let loadedModelMesa;

// glftLoader.load( './assets/mesaDescontrol/mesaDescontrol.glb', function ( gltfScene3 ) {
// 	loadedModelMesa = gltfScene3;

// 	gltfScene3.scene.scale.set(0.01, 0.01, 0.01);

// 	scene.add(gltfScene3.scene);


// } );

let loadedModelMiniMe;

glftLoader.load( './assets/dos_yo_22_04_20.gltf', function ( gltfScene ) {
	loadedModelMiniMe = gltfScene;

	gltfScene.scene.scale.set(0.1, 0.1, 0.1);


	scene.add(gltfScene.scene);


} );

let loadedModelMiniMe2;

glftLoader.load( './assets/dos_yo_22_04_20.gltf', function ( gltfScene ) {
	loadedModelMiniMe2 = gltfScene;

	gltfScene.scene.scale.set(0.1, 0.1, 0.1);
	gltfScene.scene.rotation.y = Math.PI;

	scene.add(gltfScene.scene);


} );

let loadedModelMe;
glftLoader.load( './assets/dos_yo_22_04_20.gltf', function ( gltfScene ) {
	loadedModelMe = gltfScene;

	gltfScene.scene.scale.set(50, 50, 50);

	// scene.add(gltfScene.scene);


} );

/////////////////////////////////
// LIGHTS
////////////////////////////

const ambientLight = new THREE.AmbientLight( 0xffffff );
scene.add( ambientLight );

// const pointLight = new THREE.PointLight( 0xffffff, 15 );
// camera.add( pointLight );
scene.add( camera );



// controls
let controls;
			controls = new OrbitControls( camera, renderer.domElement );
			// controls.listenToKeyEvents( window ); // optional

			//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

			controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
			controls.dampingFactor = 0.05;

			controls.screenSpacePanning = false;

			controls.minDistance = 0.15;
			controls.maxDistance = 70;

			// controls.maxPolarAngle = Math.PI / 2;




function animate() {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

    // cube2.rotation.x -= 0.01;
	// cube2.rotation.y -= 0.01;

    // cube3.rotation.x -= 0.01;
	// cube3.rotation.y += 0.01;
    // cube3.rotation.z -= 0.01;


	cube.rotation.x += 0.03;
	cube.rotation.y += 0.05;

    cube2.rotation.x -= 0.05;
	cube2.rotation.y -= 0.03;

    cube3.rotation.x -= 0.01;
	cube3.rotation.y += 0.01;
    cube3.rotation.z -= 0.01;


	if (loadedModel) {

        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }


	if (loadedModelVelaMedio) {
        loadedModelVelaMedio.scene.rotation.x += 0.01;
        loadedModelVelaMedio.scene.rotation.y += 0.01;
        loadedModelVelaMedio.scene.rotation.z += 0.01;
      }

	if (loadedModelVelaChica) {
		loadedModelVelaChica.scene.rotation.x += 0.01;
		loadedModelVelaChica.scene.rotation.y += 0.05;
		loadedModelVelaChica.scene.rotation.z += 0.01;
	}

	//   if (loadedModelMesa) {
    //     // loadedModelMesa.scene.rotation.x += 0.01;
    //     loadedModelMesa.scene.rotation.y += 0.015;
    //     // loadedModelMesa.scene.rotation.z += 0.01;
    //   }

	
	  if (loadedModelMiniMe) {
        // loadedModelMesa.scene.rotation.x += 0.01;
        loadedModelMiniMe.scene.rotation.y += 0.015;
        // loadedModelMesa.scene.rotation.z += 0.01;
      }

	  if (loadedModelMiniMe2) {
        // loadedModelMesa.scene.rotation.x += 0.01;
        loadedModelMiniMe2.scene.rotation.y += 0.015;
        // loadedModelMesa.scene.rotation.z += 0.01;
      }

	  if (loadedModelMe) {
        loadedModelMe.scene.rotation.x += 0.01;
        loadedModelMe.scene.rotation.y += 0.01;
        loadedModelMe.scene.rotation.z += 0.01;
      }


	renderer.render( scene, camera );
}

animate();