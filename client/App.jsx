import React from "react";
import { createRoot } from "react-dom/client";
import TextArea from "./TextArea";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayCards from "./DisplayCards";
import CardContainer from "./CardContainer";

const App = () => {
  return (
    <div className="m-2 p-2">
      <BrowserRouter>
        <header className="mb-5 w-full bg-green-500 p-7 text-center rounded">
          <Link
            className="font-sans hover:text-slate-200 text-6xl text-white"
            to="/"
          >
            Nexus Network
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/submit" element={<TextArea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
