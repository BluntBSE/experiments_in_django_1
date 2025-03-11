import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCube, createSkybox } from "./components/cube.js";
import { createLights } from "./components/lights.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

//Module scoping
let camera;
let renderer;
let scene;
let loop;
//This wouldn't work if we wanted two worlds, though, since we'd be sharing between instances
class World {
  // 1. Create an instance of the World app

  constructor(container) {
    //this.camera = createCamera() - would be globally accessible
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    console.log("Hello from World's Constructor!");

    const cube = createCube();
    const skybox = createSkybox();
    const { directionalLight, ambientLight } = createLights();

    loop.updatables.push(cube);
    loop.updatables.push(skybox);

    scene.add(cube);
    scene.add(directionalLight, ambientLight);
    scene.add(skybox);
    const resizer = new Resizer(container, camera, renderer); // The resizer is operating in the background simply by being int he scene tree
  }

  // 2. Render the scene
  render() {
    console.log("Hello from World's Render!");
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
