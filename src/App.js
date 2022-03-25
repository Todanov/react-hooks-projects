import React from "react";

import "./App.css";
import CurrentUserCheker from "./pages/components/CurrentUserCheker/CurrentUserCheker";
import { CurrentUserProvider } from "./pages/contexts/context";
import Routings from "./pages/routs.js";

function App() {
  return (
    <CurrentUserProvider className="container _container">
      <CurrentUserCheker>
        <div>Hello Hooks</div>
        <Routings />
      </CurrentUserCheker>
    </CurrentUserProvider>
  );
}

export default App;
