import React from 'react';
import { createRoot } from "react-dom/client";
import TextArea from './TextArea';
import Title from './Title';

const App = () => {
  return (
    <>
      <h1>Networking Marketplace</h1>
      <Title/>
      <TextArea/>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
