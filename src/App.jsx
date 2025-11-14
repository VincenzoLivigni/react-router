import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pagine/HomePage";
import Abouts from "./pagine/Abouts";
import Contacts from "./pagine/Contacts";


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/abouts" element={<Abouts />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
