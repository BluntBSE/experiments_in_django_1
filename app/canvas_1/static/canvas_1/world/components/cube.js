import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
  SphereGeometry,
  CubeTextureLoader,
  ShaderMaterial,
  BackSide,
} from "../../three.js-dev/build/three.module.js";

const radiansPerSecond = MathUtils.degToRad(8);

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    "static/canvas_1/world/assets/planet_3.png"
  );
  console.log(texture);
  const material = new MeshStandardMaterial({
    map: texture,
    transparent: true,
  });

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new SphereGeometry(2);

  // create a default (white) Basic material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    // cube.rotation.z += radiansPerSecond * delta;
    //cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

function createSkybox() {
  const loader = new CubeTextureLoader();

  const material = new ShaderMaterial({
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
    side: BackSide,
    uniforms: {
      uTime: { value: 0.0 },
    },
  });

  const geometry = new BoxGeometry(100, 100, 100);
  const skybox = new Mesh(geometry, material);

  skybox.tick = (delta) => {
    material.uniforms.uTime.value += delta;
    console.log("Incremented the uniform value by " + delta);
    console.log(material.uniforms.uTime.value);
  };
  return skybox;
}

export { createCube, createSkybox };
