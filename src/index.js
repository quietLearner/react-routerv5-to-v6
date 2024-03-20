import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// v5
// ReactDOM.render(
//   <React.StrictMode>
//     <Routes>
//       <Router>
//         <Route path="/" component={App} />
//       </Router>
//     </Routes>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/*" element={<App></App>} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
    {/* <MemoryRouter> for testing
      <App />
    </MemoryRouter> */}
  </React.StrictMode>
);
