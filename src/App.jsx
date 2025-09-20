import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";
const promiseBottle = fetch("/bottles-data.json").then(res => res.json())

function App() {
  return (
    <>
      <h1>Nice Portable Water Bottles For You</h1>
      <Suspense fallback={<h3>Your Bottles Are Loading...</h3>}>
        <Bottles promiseBottle={promiseBottle}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
