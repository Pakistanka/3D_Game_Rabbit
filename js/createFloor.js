function createFloor() {

    floorShadow = new THREE.Mesh(new THREE.SphereGeometry(floorRadius, 50, 50), new THREE.MeshPhongMaterial({
        color: 0x7abf8e,
        specular: 0x000000,
        shininess: 1,
        transparent: true,
        opacity: .5
    }));
    // floorShadow.rotation.x = -Math.PI / 2;
    floorShadow.receiveShadow = true;
}