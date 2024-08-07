import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Contact,
  Cart,
  Checkout,
  Profile,
  Settings,
} from "./pages/index";
import {
  Header,
  Footer,
  Notifications,
  PrivacyPolicy,
  ChangePassword,
} from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
