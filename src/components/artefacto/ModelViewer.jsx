import {useEffect} from 'react';

import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import SceneInit from '../../lib/SceneInit';

export function ModelViewer(artefacto) {
    //url del modelo en /pulic/assets/models
    let modelUrl = '/assets/models/C432.glb';
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();



        const handleResize = () => {
            const container = document.getElementById('Model1');
            test.camera.aspect = (container.clientWidth) / container.clientHeight;
            test.camera.updateProjectionMatrix();
            test.renderer.setSize(container.clientWidth, container.clientHeight);
        }
        //solo en caso de que se redimensione la ventana si el body tiene id Artefacto

        window.addEventListener('resize', handleResize, false);


        //para el plano
        const geometryplane = new THREE.PlaneGeometry(30, 30, 32);
        const materialplane = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('/assets/textures/table.jpg'),
            side: THREE.DoubleSide
        });
        const plane = new THREE.Mesh(geometryplane, materialplane);
        plane.rotation.x = -Math.PI / 2; // Rotar el plano para que esté paralelo al suelo


        let loadedModel;
        const glftloader = new GLTFLoader();
        glftloader.load(modelUrl
            , (gltfScene) => {
                loadedModel = gltfScene.scene;
                gltfScene.scene.scale.set(100, 100, 100);
                gltfScene.scene.position.y = 0;
                gltfScene.scene.position.z = 0;
                gltfScene.scene.position.x = 0;
                gltfScene.scene.rotation.x = 0;
                //locate the center of the model
                gltfScene.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.center();
                    }
                });

                // Calcular la altura total del modelo
                const boundingBox = new THREE.Box3();
                boundingBox.setFromObject(loadedModel);
                const modelHeight = boundingBox.max.y - boundingBox.min.y;

                // Posicionar el plano debajo del modelo
                plane.position.y = -modelHeight / 2; // Coloca el plano a la mitad de la altura total del modelo
                // Asegúrate de que el plano no intersecte con el modelo
                plane.position.y += 0.2; // Ajusta la posición del plano para que esté ligeramente debajo del modelo
               // test.scene.add(plane);
                test.scene.add(gltfScene.scene);
            });


        const animate = () => {
            if (loadedModel) {
                //loadedModel.rotation.z += 0.01;
                loadedModel.rotation.y += 0.002;
                plane.rotation.z += 0.002;
                //loadedModel.rotation.x+=0.01;
            } else {
                console.log('modelo no cargado');
            }
            //console log distance

            requestAnimationFrame(animate);
        };
        animate();

        let canvasito = document.querySelector("#Model1");
        canvasito.appendChild(test.renderer.domElement);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className="flex flex-col w-6/12  align-middle p-5 justify-center items-center" style={{ backgroundColor: "#f9e0dc"}}>
            <h1 className="text-5xl text-center mb-12 text-orange-800 font-bold" style={{color : "#A62422"}}>UDES {artefacto.artefacto.nombre
            }</h1>
            <div id="Model1" className="w-10/12 h-4/6 bg-white rounded-lg ">
                <canvas id="myThreeJsCanvas" className="rounded-lg"  ></canvas>
            </div>
            <p className=" w-10/12 text-xl mt-10 text-center font-light" style={{color: "#A62422", fontSize: "2rem"
            }}>
                {artefacto.artefacto.descripcion}
            </p>
        </div>

    )
}