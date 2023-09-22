// App.js
import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import OrientationChecker from "./OrientationChecker";
import { LoadingScreen } from "./components/LoadingScreen";
import { UseLoading } from "./hooks/UseLoading";
import { useOrientation } from "./hooks/UseOrientation";

//import fragments

export const App = () => {
  const { isLoaded, loading, setLoading, loadedImages } = UseLoading();
  const forceRender = useOrientation();
  return (
    <Router>
      <StrictMode>
        <OrientationChecker key={forceRender}>
          {!isLoaded && <LoadingScreen percentage={loading} />}
          {isLoaded && <AnimatedRoutes loadedImages={loadedImages} />}
        </OrientationChecker>
      </StrictMode>
    </Router>
  );
};

export default React.memo(App);
