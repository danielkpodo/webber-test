import React from "react";
import "./App.css";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Form from "../components/forms/Form";
import Table from "../components/table/Table";
import Footer from "../components/Footer";
import Notifications from "../components/sidebar/Notifications";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content-area">
        <div className="row">
          <div className="col l9">
            <Dashboard />
            <Form />
            <Table />
          </div>
          <div className="col l3">
            <Notifications />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
