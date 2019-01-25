import React from "react";
import ReactDOM from "react-dom";

// ===================== //
// IMPORT THE COMPONENT  //
// ===================== //
import { JsonToTable } from "react-json-to-table";
// ===================== //

import "./styles.css";

function App() {
  // ===================== //
  // DUMMY DATA            //
  // ===================== //
  const myJson = {
    Analyst: { name: "Jack", email: "jack@xyz.com" },
    "Loaded by": "Jills",
    "Load id": 34,
    "git id": "xxqaygqertqsg98qhpughqer",
    "Analysis Id": "7asdlnagsd98gfaqsgf",
    "Load Date": "July 12, 2018",
    "Data Source": "Study XY123-456",
    "Jira Ticket": "Foo-1",
    "Confluence URL": "http://myserver/wxyz",
    "Study sponsors": [
      { name: "john", email: "john@@xyz.com" },
      { name: "jane", email: "jane@@xyz.com" }
    ]
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* ===================== */}
      {/* HOW TO USE IT         */}
      {/* ===================== */}
      <JsonToTable json={myJson} />
      {/* ===================== */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
