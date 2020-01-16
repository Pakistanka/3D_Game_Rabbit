let scene,
    camera, fieldOfView, aspectRatio, nearPlan, farPlan,
    gobalLight, shadowLight, backLight,
    renderer,
    container;

let delta = 0;
let floorRadius = 200;
let cameraPosGame = 160;
let cameraPosGameOver = 260;
let monsterAcceleration = 0.004;
let malusClearColor = 0xb44b39;
let malusClearAlpha = 0;
// let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/264161/Antonio-Vivaldi-Summer_01.mp3');

let fieldGameOver, fieldDistance;

// INIT THREE JS, SCREEN AND MOUSE EVENTS

function initScreenAnd3D() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    scene = new THREE.Scene();

    //  fog effect = color, near distance, far distance
    scene.fog = new THREE.Fog(0xd6eae6, 160, 350);

    aspectPatio = WIDTH / HEIGHT;
    fieldOfView = 50;
    nearPlan = 1;
    farPlan = 2000;

    // init perspective angle
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlan,
        farPlan
    );
    camera.position.x = 0;
    camera.position.z = cameraPosGame;
    camera.position.y = 30;
    camera.lookAt(new THREE.Vector3(0, 30, 0));

    // init WebGL render
    renderer = new THREE.WebGLRenderer({
        // transparence
        alpha: true,
        // smoothing of the image or sound. Default: false
        antialias: true
    });
    //  device pixel ratio. prevent bluring
    renderer.setPixelRatio(window.devicePixelRatio);
    //  sets clear color and opacity
    renderer.setClearColor(malusClearColor, malusClearAlpha);

    renderer.setSize(WIDTH, HEIGHT);
    // enables us to display shadows of our characters.
    renderer.shadowMap.enabled = true;

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);
}

function initUI() {
    fieldDistance = document.getElementById('distValue');
    fieldGameOver = document.getElementById('gameoverInstructions');
}

window.addEventListener('load', init, false);

function render() {
    renderer.render(scene, camera);
}

function init(event) {
    initScreenAnd3D();
    initUI();
    render();
}


