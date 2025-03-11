import { Clock } from "../../three.js-dev/build/three.module.js";

const clock = new Clock();
const delta = clock.getDelta();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }
  tick() {
    const delta = clock.getDelta();
    // console.log(`The last frame rendered in ${delta * 1000} milliseconds`);
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { Loop };
