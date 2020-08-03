import React from "react";
import "./App.css";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Form from "../components/forms/Form";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="content-area">
        <div className="row">
          <div className="col l9">
            <Dashboard />
            <Form />
          </div>
          <div className="col l3">Sidebar</div>
        </div>
      </main>
    </div>
  );
}

export default App;
