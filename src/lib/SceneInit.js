import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 25;
    //empezar en angulo 45º
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    const contenedor = document.getElementById("Model1"); // Reemplaza 'container' con el ID de tu contenedor
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      contenedor.clientWidth / contenedor.clientHeight,
      1,
      1000,
    );
    this.camera.position.z = 48;

    this.camera.position.y = 30;

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setClearColor(0xffffff);
    const container = document.getElementById("Model1"); // Reemplaza 'container' con el ID de tu contenedor
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    //this.renderer.setSize(window.innerWidth*0.5, window.innerHeight);
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    //actualizar controles, no permitir girar la pieza pero si rotarla y mirar arriba y limitar hacia abajo por la parte inferior de la pieza
    //this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 40;
    this.controls.maxPolarAngle = Math.PI / 1.85; // Limitar a mirar hacia arriba
    this.controls.minPolarAngle = 0; // Limitar a mirar hacia abajo

    this.stats = Stats();
    //document.body.appendChild(this.stats.dom); //estadisticas de rendimiento ThreeJs

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);
    // if window resizes
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    // NOTE: Dispose all the objects in the scene.
    this.scene.traverse((object) => {
      if (!object.isMesh) return;
      object.geometry.dispose();
      if (object.material.isMaterial) {
        this.cleanMaterial(object.material);
      } else {
        // an array of materials
        for (const material of object.material) this.cleanMaterial(material);
      }
    });
  }
}
