$(function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(0x000000); //black color
    renderer.setSize(window.innerWidth, window.innerHeight); //takes the screen size

    var axis = new THREE.axisHelper[10];
    scene.add(axis);

    var cubeGeometry = new THREE.BoxGeometry(5,5,5);
    var cubeMaterial = new THREE.MathBasicMaterial({color: 0xdddddd, wireframe: true});
    var cube = new THREE.Math(cubeGeometry, cubeMaterial);

    cube.position.x = 0;
    cube.position.y = 0; 
    cube.position.z = 0;

    scene.add(cube);

    camera.position.x = 0;
    camera.position.y = 0; 
    camera.position.z = 0;    

    camera.lockAt(scene.position);

    $("#webGL-container").append(renderer.domElement);
    renderer.render(scene, camera);

});
