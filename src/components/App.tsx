import React, { useEffect } from "react";
import HomePage from "components/pages/HomePage";
import { viewAnalytics } from "ga";

const App: React.FC = () => {
  useEffect(() => {
    viewAnalytics("main");
  });

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
