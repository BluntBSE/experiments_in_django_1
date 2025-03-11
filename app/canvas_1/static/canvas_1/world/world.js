import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";

//Module scoping
let camera;
let renderer;
let scene;
//This wouldn't work if we wanted two worlds, though, since we'd be sharing between instances

class World {
  // 1. Create an instance of the World app

  constructor(container) {
    //this.camera = createCamera() - would be globally accessible
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    console.log("Hello from World's Constructor!");
  }

  // 2. Render the scene
  render() {
    console.log("Hello from World's Render!");
    createCamera();
  }
}

export { World };
