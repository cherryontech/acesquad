import React from "react";
import { createRoot } from "react-dom/client";
import TextArea from "./TextArea";
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayCards from "./DisplayCards";
import CardContainer from "./CardContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">Networking Marketplace</Link>
        </header>
        <Routes>
          <Route path="/" element={<DisplayCards />} />
          <Route path="/filter" element={<CardContainer />} />
          <Route path="/submit" element={<TextArea />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
