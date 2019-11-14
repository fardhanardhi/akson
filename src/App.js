import React from "react";
import Router from "./routes/Routes";
import AppProvider from "./context/AppProvider";

import "./App.css";

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
