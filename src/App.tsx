import "./App.css";
import MilkTeas from "./pages/milktea/MilkTeas";
// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, useAppReducer } from "./engine/global/reducer";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const value = useAppReducer();

  return (
    <div className="App">
      <AppProvider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MilkTeas />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
