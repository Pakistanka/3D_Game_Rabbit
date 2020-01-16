function createLights() {
    globalLight = new THREE.AmbientLight(0xffffff, .9);

    // setup the position of the source of light
    shadowLight = new THREE.DirectionlLight(0xffffff, 1);
    shadowLight.position.set(-30, 40, 20);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.down = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 2000;
    shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2000;

    scene.add(globalLight);
    scene.add(shadowLight);
}

// light.castShadow = true;