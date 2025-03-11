import { WebGLRenderer } from "../../three.js-dev/build/three.module.js";

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
