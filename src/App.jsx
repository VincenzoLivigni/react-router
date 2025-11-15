import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pagine/HomePage";
import Abouts from "./pagine/Abouts";
import Products from "./pagine/Products";


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/abouts" element={<Abouts />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
