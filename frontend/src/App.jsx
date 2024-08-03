import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Contact } from "./pages/index";
import { Header, Footer } from "./Components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
