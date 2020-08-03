import React from "react";
import "./App.css";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content-area">
        <div className="row">
          <div className="col l8">
            <Dashboard />
          </div>
          <div className="col l4">Sidebar</div>
        </div>
      </main>
    </div>
  );
}

export default App;
