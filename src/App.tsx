import "./App.css";
import MilkTeas from "./components/MilkTeas";
// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, useAppReducer } from "./engine/global/reducer";

function App() {
  const value = useAppReducer();

  return (
    <div className="App">
      <AppProvider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MilkTeas />} />
            <Route path="/receipt" />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
