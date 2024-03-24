import { useState, lazy, Suspense } from "react";
import { AdaLovelaceProfile } from "./components/AdaLovelaceProfile";

const ReactLandMap = lazy(() => import("./components/ReactLandMap"));

function App() {
  const [currentView, setCurrentView] = useState("ada-lovelace");

  function toggleView() {
    setCurrentView(
      currentView === "ada-lovelace" ? "react-land-map" : "ada-lovelace"
    );
  }

  return (
    <div>
      <h1>React Land</h1>
      <button onClick={toggleView}>
        {currentView === "ada-lovelace" ? "Show map" : "Show Ada"}
      </button>
      {currentView === "ada-lovelace" ? (
        <AdaLovelaceProfile />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <ReactLandMap />
        </Suspense>
      )}
    </div>
  );
}

export default App;
