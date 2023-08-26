console.log("happen");

import * as three from "https://unpkg.com/three@0.155.0/build/three.module.js";


window.addEventListener('resize', onWindowResize, false);

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new three.BoxGeometry(1, 1, 1, 1);
const material = new three.MeshBasicMaterial({color:0x00ff00});

const cube = new three.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
}