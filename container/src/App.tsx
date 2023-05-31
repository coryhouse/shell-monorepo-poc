import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = lazy(() => import("app2/CounterAppTwo"));

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ContainerApp
              CounterAppOne={CounterAppOne}
              CounterAppTwo={CounterAppTwo}
            />
          }
        />
        <Route path="app1/*" element={<CounterAppOne />} />
        <Route path="app2/*" element={<CounterAppTwo />} />
      </Routes>
    </>
  );
}
