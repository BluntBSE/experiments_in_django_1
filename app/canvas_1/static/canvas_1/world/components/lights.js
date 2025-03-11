import {
  DirectionalLight,
  AmbientLight,
} from "../../three.js-dev/build/three.module.js";

function createLights() {
  // Create a directional light
  const directionalLight = new DirectionalLight("#E0BFB8", 6);

  // move the light right, up, and towards us
  directionalLight.position.set(10, 10, 10);
  const ambientLight = new AmbientLight(0xffffff, 0.5); // White light with intensity 2

  return { directionalLight, ambientLight };
}

export { createLights };
