// Materials

// MeshPhongMaterial - simulate shiny surface with speculat highlights
let blackMat = new THREE.MeshPhongMaterial({
    color: 0x100707,
    shading: THREE.FlatShading,
});

let brownMat = new THREE.MeshPhongMaterial({
    // color of material
    color: 0xb44b39,
    // how shiny the specular highlight
    shininess: 0,
    // Flat and Smooth shanding.  Flat - rough texture (stones, tree brks and so on). Smooth - glass
    shading: THREE.FlatShading
});

let greenMat = new THREE.MeshPhongMaterial({
    color: 0x7abf8e,
    shininess: 0,
    shading: THREE.FlatShading
});

let pinkMat = new THREE.MeshPhongMaterial({
    color: 0xdc5f45, 
    // 0xb43b29, 0xff5b49
    shininess: 0,
    shading: THREE.FlatShading
});

let lightBrownMat = new THREE.MeshPhongMaterial({
    color: 0xe07a57,
    shading: THREE.FlatShading
});

let whiteMat = new THREE.MeshPhongMaterial({
    color: 0xa49789,
    shading: THREE.FlatShading
});

let skinMat = new THREE.MeshPhongMaterial({
    color: 0xff9ea5,
    shading: THREE.FlatShading
});