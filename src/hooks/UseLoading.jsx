// hooks/useLoading.js

import { useEffect, useMemo, useState } from "react";
import preloadFiles from "../data/preloadFiles.json";

export function UseLoading() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(0);
  const [loadedImages] = useState([]);

  //imagenes del index importantes a precargar, esto para solo hacerlo una vez C;
  let imagenes_precarga = useMemo(() => {
    const indexCards = Object.values(require("../data/Homepage.json"));
    let data = indexCards.map((item) => {
      return item.imageSrc;
    });

    //otras imagenes
    const imagenesAdicionales = Object.values(
      require("../data/preloadFiles.json").images.list,
    );
    let items_adicionales = imagenesAdicionales.map((item) => {
      return preloadFiles.images.position + item;
    });

    data.push(...items_adicionales);

    console.log("solo una vez C:");
    return data;
  }, []);

  let imagenes_background = useMemo(() => {
    //items a precargar en segundo plano
    const ArtefactosImg = Object.values(require("../data/artefactos.json"));

    const imagenes_extra = ArtefactosImg.map((item) => {
      //guardar en un array img1 y img2 de cada artefacto
      return [item.img1, item.img2];
    });
    return imagenes_extra.flat();
  });

  useEffect(() => {
    const imageLoad = imagenes_precarga.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setLoading((loading) => loading + 100 / imagenes_precarga.length);
          resolve();
        };
        img.onerror = () => {
          //todo quitar cuando se suba a produccion
          reject(new Error(`No se pudo cargar la imagen: ${url}`));
          setLoading((loading) => loading + 100 / imagenes_precarga.length);
          console.log("error con la imagen: ", url);
          resolve();
        };
      });
    });

    Promise.all(imageLoad).then(() => {
      setLoading(100);
      setIsLoaded(true);
    });
  }, []);

  return { isLoaded, loading, setLoading, loadedImages };
}
