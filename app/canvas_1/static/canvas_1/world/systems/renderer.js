import { WebGLRenderer } from "../../three.js-dev/build/three.module.js";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
