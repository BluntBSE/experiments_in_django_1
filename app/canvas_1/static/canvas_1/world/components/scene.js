import { Color, Scene } from "../../three.js-dev/build/three.module.js";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("black");

  return scene;
}

export { createScene };
