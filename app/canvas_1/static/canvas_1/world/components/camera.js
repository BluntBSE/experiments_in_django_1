import { PerspectiveCamera } from "../../three.js-dev/build/three.module.js";

function createCamera() {
  console.log("Creating camera!");
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  camera.tick = (delta) => {
    //Rotate around z-axis
    //camera.rotation.z += delta;
    camera.updateProjectionMatrix();
  };
  return camera;
}

export { createCamera };
