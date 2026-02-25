// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { GifsApp } from "./GifsApp";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <GifsApp/>
  {/* <MyCounterApp />, */}
   </StrictMode>,
);
